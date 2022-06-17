import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import create from "zustand";
import Swal from "sweetalert2";
import ViewPageView from "./ViewPageView";
import useViewStore from "../zustand/useViewStore";


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

    // 추천 수
    const [recommendCnt, setRecommendCnt] = useState(0);

    // 게시물 삭제
    const deleteClick= (e) => {
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
    const updateClick = (e) => {
        e.preventDefault();
        window.location = `/update/${id}`;
    }

    // 목록으로 돌아가기 버튼
    const backClick = (e) => {
        e.preventDefault();
        window.location = '/';
    }

    // 추천 버튼 클릭 이벤트
    const recommendClick = (e) => {
        e.preventDefault();
            // 추천 버튼 클릭한 만큼 +1 증가한 값을 Backend에 put method 보내기

            axios({
                url: `http://localhost:8080/view/${id}`,
                method: 'put'
            }).then((res) => {
                setRecommendCnt(res.data);
            }).catch((error) => {
                console.log(error);
            })

    }

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
            setRecommendCnt(res.data.recommendCnt);
        }).catch((error) => {
            console.log(error)
        })
    }, [id])

    const viewPageViewProps = {
        title,
        date,
        updateClick,
        deleteClick,
        content,
        backClick,
        viewCnt,
        recommendClick,
        recommendCnt
    }

    return <ViewPageView {...viewPageViewProps} />;
}

export default ViewPage;