import React from "react";
import style from '../style/Write.module.css';



const UpdatePage = ({
    title,
    content,
    updateOnClick,
    onChangeContent,
    onChangeTitle
}) => {
    return(
       <div className={style.write_div}>
            <h3>글 수정</h3>
            <input className={style.title} type='text' placeholder='제목' defaultValue={title} onChange={onChangeTitle} />
            <br/>

           <textarea rows="18" style={{ "width": "50%", "textAlign": "left" }} defaultValue={content} onChange={onChangeContent}/>
           <br/>

           <button type="button" className="btn btn-white btn-outline-primary mt-2" onClick={updateOnClick}>
               수정
           </button>
        </div>
    )
}

export default UpdatePage;