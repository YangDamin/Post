import React, {useState} from "react";
import create from 'zustand';
import axios from "axios";
import Swal from "sweetalert2";
import WritePageView from "./WritePageView";
import useWriteStore from "../zustand/useWriteStore";


const WritePage = () => {
    const title = useWriteStore((state) => state.title);
    const setTitle = useWriteStore((state) => state.setTitle);

    const content = useWriteStore((state) => state.content);
    const setContent = useWriteStore((state) => state.setContent);


    const onClick = (e) => {
        e.preventDefault();

        // 작성 날짜
        let date = new Date();

        // 제목 및 내용이 입력되어 있지 않으면 막기
        if(title === '' || content === ''){
            Swal.fire(
                '',
                '내용 입력해주세요.',
                'warning'
            )
        } else {
            axios({
                url: 'http://localhost:8080/write',
                method: "post",
                data: {
                    "title": title,
                    "content": content,
                    "date" : date.toLocaleDateString()
                }
            }).then((res) => {
                Swal.fire(
                    '',
                    '작성 완료!',
                    'success'
                )
                setTimeout( () => {
                    window.location ='/';
                }, 2000)
            }).catch((error) => {
                console.log(error);
            })
        }
    }


    const onChange = (e) => {
        var contents = e.target.value;
        contents = contents.replace(/(\n|\r\n)/g, '<br>');      // 줄띄기하면 <br>로 저장되게
        setContent(contents);
    }


    const writePageViewProps = {
        setTitle,
        onClick,
        onChange
    };

    return <WritePageView {...writePageViewProps} />;
}

export default WritePage;