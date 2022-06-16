import React, {useEffect, useState} from "react";
import style from '../style/Main.module.css';
import { AgGridReact} from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from "axios";
import {useHistory} from "react-router-dom";


function Main() {
    // 글쓰기 버튼 큻릭 시 이벤트
    function onClick(e) {
        e.preventDefault();

        window.location.href = "/write";
    }

    // AGGrid
    const [dataList, setDataList] = useState([]);       // 게시물 data

    useEffect(() => {
        axios({
            url: "http://localhost:8080",
            method: "get"
        }).then((res) => {
            setDataList(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])

    const columnDefs = [
        {headerName: '제목', field: "title", width: 1000},
        {headerName: '작성 날짜', field: "date", width: 340, sort:'desc'}
    ]

    const rowData = dataList.map((data) => {
        return{
            title: data.title,
            date : data.date,
            id : data.id,
        }
    })

    // const history = useHistory();

    return (
        <div className={style.main_div}>
            <button type="button" className="btn btn-white btn-outline-primary" onClick={onClick}>글쓰기</button>

            {/*    aggrid    */}
            <div className="ag-theme-alpine" style={{width: '70vw', height:'48vh', margin:"25px 0 0 10vw"}}>
                <AgGridReact
                    headerHeight='40'
                    columnDefs={columnDefs}
                    rowData={rowData}

                    onRowClicked = {(e) => {
                        // console.log(e.data.id)
                        window.location = `/view/${e.data.id}`;

                        // history.push({
                        //     pathname : `/view/${e.data.id}`,
                        //     state: {
                        //         title : e.data.title,
                        //         date : e.data.date,
                        //         content : e.data.content
                        //     }
                        // })
                    }}
                >
                </AgGridReact>
            </div>
        </div>
    )
}

export default Main;