import React, {useEffect, useState} from "react";
import style from '../style/Write.module.css';
import axios from "axios";
import {useParams} from "react-router-dom";
import create from "zustand";
import Swal from "sweetalert2";


// zustand
const useUpdateStore = create((set) => ({
    updateTitle : '',           // 수정할 title
    updateContent : '',         // 수정할 content
    setUpdateTitle: (t) => {
        set({updateTitle : t});
    },
    setUpdateContent : (c) => {
        set({updateContent: c});
    }
}))

function Update() {

    const {id} = useParams();

    // 기존 값 가져오기 위해 Hook - useState() 이용
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    // 수정하기 위해 zustand 사용
    const updateTitle = useUpdateStore((state) => state.updateTitle);
    const setUpdateTitle = useUpdateStore((state) => state.setUpdateTitle);

    const updateContent = useUpdateStore((state) => state.updateContent);
    const setUpdateContent = useUpdateStore((state) => state.setUpdateContent);


    // 수정하기 위해 기존 값 가져오기
    useEffect(() => {
        axios({
            url: `http://localhost:8080/update/${id}`,
            method: 'get'
        }).then((res) => {
            setTitle(res.data.title);
            setContent(res.data.content);
        }).catch((error) => {
            console.log(error)
        })
    }, [id])

    // 수정 버튼 클릭 이벤트
    function updateOnClick(e) {
        e.preventDefault();

        let date = new Date();

        axios({
            url : `http://localhost:8080/update/${id}`,
            method: 'put',
            data : {
                "id": id,
                "title" : updateTitle,
                "content" : updateContent,
                "date" : date.toLocaleDateString()
            }
        }).then((res) => {
            Swal.fire(
                '',
                '수정 완료!',
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
            <h3>글 수정</h3>
            <input className={style.title} type='text' placeholder='제목' defaultValue={title} onChange={(e) =>{ setUpdateTitle(e.target.value); }} />
            <br/>
            <textarea rows="18" style={{ "width": "50%", "textAlign": "left" }} defaultValue={content} onChange={(e) =>{
                var contents = e.target.value;
                contents = contents.replace(/(\n|\r\n)/g, '<br>');      // 줄띄기하면 <br>로 저장되게
                setUpdateContent(contents); }}></textarea>
            <br/>
            <button type="button" className="btn btn-white btn-outline-primary mt-2" onClick={updateOnClick}>수정</button>
        </div>
    )
}

export default Update;