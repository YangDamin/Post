import React, {useState} from "react";
import style from '../style/Write.module.css';
import create from 'zustand';
import axios from "axios";
import Swal from "sweetalert2";


function Update() {

    return(
        <div className={style.write_div}>
            <h3>글 수정</h3>
            <input className={style.title} type='text' placeholder='제목' value="안녕" />
            <br/>
            <textarea rows="18" style={{ "width": "50%", "textAlign": "left" }} ></textarea>
            <br/>
            <button type="button" className="btn btn-white btn-outline-primary mt-2">수정</button>
        </div>
    )
}

export default Update;