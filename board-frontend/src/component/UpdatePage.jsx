import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import create from "zustand";
import Swal from "sweetalert2";
import UpdatePageView from "./UpdatePageView";


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

const UpdatePage = () => {

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
    const updateOnClick= (e) => {
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

    const updatePageViewProps = {
        title,
        content,
        setUpdateTitle,
        setUpdateContent,
        updateOnClick
    }

    return <UpdatePageView {...updatePageViewProps}/>;

}

export default UpdatePage;