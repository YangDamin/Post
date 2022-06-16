import React from "react";
import style from '../style/View.module.css';


const ViewPage = ({
    title,
    date,
    updateClick,
    deleteClick,
    content
}) => {

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
                        <span style={{fontSize:"1.1rem"}} key={line.id}>
                            {line}
                            <br/>
                        </span>
                    )
                })}
            </div>

        </div>
    )
}

export default ViewPage;