import React, {useState} from "react";
import create from 'zustand';
import axios from "axios";
import Swal from "sweetalert2";
import WritePageView from "./WritePageView";

// zustand
const useWriteStore = create((set) => ({
    title : '',             // 제목
    content : '',            // 내용
    setTitle: (t) => {
        set({title : t});
    },
    setContent: (c) => {
        set({content: c});
    }
}))

const WritePage = () => {
    const title = useWriteStore((state) => state.title);
    const setTitle = useWriteStore((state) => state.setTitle);

    const content = useWriteStore((state) => state.content);
    const setContent = useWriteStore((state) => state.setContent);


    function onClick(e) {
        e.preventDefault();

        // const formData = new FormData();
        // formData.append("title", title);
        // formData.append("content", content);

        // 작성 날짜
        let date = new Date();

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
            setTimeout(function () {
                window.location ='/';
            }, 2000)
        }).catch((error) => {
            console.log(error);
        })
    }

    const writePageViewProps = {
        setTitle,
        setContent,
        onClick
    };

    return <WritePageView {...writePageViewProps} />;
}

export default WritePage;