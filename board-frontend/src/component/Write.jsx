import React, {useState} from "react";
import style from '../style/Write.module.css';
import create from 'zustand';
import axios from "axios";
import Swal from "sweetalert2";

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

function Write() {
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
            console.log("작성 완료");
            Swal.fire(
                '작성 완료!',
                '',
                'success'
            )
            setTimeout(function () {
                window.location ='/';
            }, 2000)
        }).catch((error) => {
            console.log(error);
        })
    }

    return(
        <div className={style.write_div}>
            <h3>글 쓰기</h3>
            <input className={style.title} type='text' placeholder='제목' value={title} onChange={(e) =>{ setTitle(e.target.value); }}/>
            <br/>
            <textarea rows="18" style={{ "width": "50%", "textAlign": "left" }} onChange={(e) =>{
                var contents = e.target.value;
                contents = contents.replace(/(\n|\r\n)/g, '<br>');      // 줄띄기하면 <br>로 저장되게
                setContent(contents); }}></textarea>
            <br/>
            <button type="button" className="btn btn-white btn-outline-primary mt-2" onClick={onClick}>작성</button>
        </div>
    )
}

export default Write;