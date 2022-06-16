import React from "react";
import style from '../style/Write.module.css';

const WritePage = ({
    setTitle,
    setContent,
    onClick
}) => {

    return(
        <div className={style.write_div}>
            <h3>글 쓰기</h3>
            <input className={style.title} type='text' placeholder='제목' onChange={(e) =>{ setTitle(e.target.value); }}/>
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

export default WritePage;