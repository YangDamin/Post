import React from "react";
import style from '../style/View.module.css';
import {FaRegThumbsUp} from 'react-icons/fa';


const ViewPage = ({
    title,
    date,
    updateClick,
    deleteClick,
    content,
    backClick,
    viewCnt,
    recommendClick,
    recommendCnt
}) => {

    return(
        <div className={style.view_div}>
            <h3>{title}</h3>
            <span style={{float:"left", color:"gray"}}>
                조회수 {viewCnt}회 · {date}
            </span>
            <span style={{float: "right", fontSize:"20px", cursor:"pointer"}} onClick={recommendClick}>
                <FaRegThumbsUp/> {recommendCnt}
            </span>

            <br/>
            <hr/>

            <div style={{float : "left"}}>
                <button type="button" className="btn btn-white btn-outline-secondary" onClick={backClick}>
                    목록
                </button>
            </div>

            <div className={style.btn}>
                <button type="button" className="btn btn-white btn-outline-primary" style={{marginRight:"10px"}} onClick={updateClick}>
                    수정
                </button>
                <button type="button" className="btn btn-white btn-outline-danger" onClick={deleteClick}>
                    삭제
                </button>
            </div>

            <div className={style.content_div}>
                {/* <br>을 만나면 줄 띄게 */}
                {(content || '')?.split("<br>").map((line) => {
                    return(
                        <span style={{fontSize:"1rem"}} key={line.id}>
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