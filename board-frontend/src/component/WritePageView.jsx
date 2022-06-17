import React from "react";
import style from '../style/Write.module.css';

const WritePage = ({
    onClick,
    onChangeContent,
    onChangeTitle
}) => {

    return(
        <div className={style.write_div}>
            <h3>글 쓰기</h3>
            <input className={style.title} type='text' placeholder='제목' onChange={onChangeTitle}/>
            <br/>
            <textarea rows="18" style={{ "width": "50%", "textAlign": "left" }} onChange={onChangeContent}/>
            <br/>
            <button type="button" className="btn btn-white btn-outline-primary mt-2" onClick={onClick}>
                작성
            </button>
        </div>
    )
}

export default WritePage;