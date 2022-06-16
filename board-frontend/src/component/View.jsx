import React, {useEffect} from "react";
import style from '../style/View.module.css';
import {useParams} from "react-router-dom";
import axios from "axios";
import create from "zustand";
import Swal from "sweetalert2";

// zustand
const useViewStore = create((set) => ({
    title : '',
    content : '',
    date : '',
    setTitle : (t) => {
        set({title: t});
    },
    setContent : (c) => {
        set({content: c});
    },
    setDate : (d) => {
        set({date: d});
    }
}))

function View() {
    // 게시물 id
    const {id} = useParams();

    const title = useViewStore((state) => state.title);
    const setTitle = useViewStore((state) => state.setTitle);
    const content = useViewStore((state) => state.content);
    const setContent = useViewStore((state) => state.setContent);
    const date = useViewStore((state) => state.date);
    const setDate = useViewStore((state) => state.setDate);

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

    return(
        <div className={style.view_div}>
            <h1>{title}</h1>
            <span style={{float:"right"}}>{date}</span>
            <br/>
            <hr/>

            <div className={style.btn}>
                <button type="button" className="btn btn-white btn-outline-primary" style={{marginRight:"10px"}} onClick={updateClick}>수정</button>
                <button type="button" className="btn btn-white btn-outline-danger" onClick={deleteClick}>삭제</button>
            </div>

            <div className={style.content_div}>
                {/* <br>을 만나면 줄 띄게 */}
                {(content || '').split("<br>").map((line) => {
                    return(
                        <span style={{fontSize:"1.1rem"}}>
                            {line}
                            <br/>
                        </span>
                    )
                })}
            </div>

        </div>
    )
}

export default View;