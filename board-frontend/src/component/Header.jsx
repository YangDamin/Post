import React from "react";
import style from '../style/Header.module.css';
import {Link} from "react-router-dom";

function Header(){
    return(
        <div className={style.header}>
            <h1><Link to="/" style={{"textDecoration":"none", "color":"white"}}>게시판</Link></h1>
        </div>
    )
}

export default Header;