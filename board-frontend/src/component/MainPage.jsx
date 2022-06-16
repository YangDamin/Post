import React, {useEffect, useState} from "react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from "axios";
import MainPageView from "./MainPageView";


const MainPage = () => {
    // 글쓰기 버튼 큻릭 시 이벤트
    const onClick = (e) => {
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
        {headerName: '작성 날짜', field: "date", width: 340, sort: 'desc'}
    ]

    const rowData = dataList.map((data) => {
        return {
            title: data.title,
            date: data.date,
            id: data.id,
        }
    })

    const mainPageViewProps = {
        onClick,
        columnDefs,
        rowData
    };

    return <MainPageView {...mainPageViewProps}/>;
}

export default MainPage;