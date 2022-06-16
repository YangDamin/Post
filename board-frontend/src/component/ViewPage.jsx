import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import create from "zustand";
import Swal from "sweetalert2";
import ViewPageView from "./ViewPageView";

// zustand
const useViewStore = create((set) => ({
    title : '',
    content : '',
    date : '',
    viewCnt : 0,
    setTitle : (t) => {
        set({title: t});
    },
    setContent : (c) => {
        set({content: c});
    },
    setDate : (d) => {
        set({date: d});
    },
    setViewCnt : (c) => {
        set({viewCnt : c});
    }
}))

const ViewPage = () => {
    // 게시물 id
    const {id} = useParams();

    const title = useViewStore((state) => state.title);
    const setTitle = useViewStore((state) => state.setTitle);
    const content = useViewStore((state) => state.content);
    const setContent = useViewStore((state) => state.setContent);
    const date = useViewStore((state) => state.date);
    const setDate = useViewStore((state) => state.setDate);
    const viewCnt = useViewStore((state) => state.viewCnt);
    const setViewCnt = useViewStore((state) => state.setViewCnt);


    // 게시물 id에 해당하는 게시물 data 가져오기
    useEffect(() => {
        axios({
            url: `http://localhost:8080/view/${id}`,
            method: 'get'
        }).then((res) => {

            // 가져온 데이터 set
            setTitle(res.data.title);
            setContent(res.data.content);
            setDate(res.data.date);
            setViewCnt(res.data.viewCnt);
        }).catch((error) => {
            console.log(error)
        })
    }, [id])


    // 게시물 삭제
    function deleteClick(e) {
        e.preventDefault();

        Swal.fire({
            title: '',
            text: "게시물 삭제하시겠습니까?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8080/view/${id}`)
                    .then((res) => {
                        Swal.fire(
                            '',
                            '삭제 완료되었습니다.',
                            'success'
                        )
                        setTimeout(function () {
                            window.location = '/';
                        }, 2000)
                    })
            }
        })
    }

    // 게시물 수정
    function updateClick(e) {
        e.preventDefault();
        window.location = `/update/${id}`;
    }

    // 목록으로 돌아가기 버튼
    function backClick(e) {
        e.preventDefault();
        window.location = '/';
    }

    const viewPageViewProps = {
        title,
        date,
        updateClick,
        deleteClick,
        content,
        backClick,
        viewCnt
    }

    return <ViewPageView {...viewPageViewProps} />;
}

export default ViewPage;