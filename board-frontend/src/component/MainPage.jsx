import React, {useEffect, useState} from "react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from "axios";
import MainPageView from "./MainPageView";


const MainPage = () => {

    // AGGrid
    const [dataList, setDataList] = useState([]);       // 게시물 data
    const columnDefs = [
        {headerName: '제목', field: "title", width: 700, filter: 'agTextColumnFilter', floatingFilter : true},
        {headerName: '작성 날짜', field: "date", width: 200, sort: 'desc'},
        {headerName: '조회수', field: "viewCnt", width: 150},
        {headerName: '추천', field: "recommendCnt", width: 100}
    ]

    // 글쓰기 버튼 큻릭 시 이벤트
    const onClick = (e) => {
        e.preventDefault();

        window.location.href = "/write";
    }

    const rowData = dataList.map((data) => {
        return {
            title: data.title,
            date: data.date,
            id: data.id,
            viewCnt : data.viewCnt,
            recommendCnt : data.recommendCnt
        }
    })

    const mainPageViewProps = {
        onClick,
        columnDefs,
        rowData
    };

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

    return <MainPageView {...mainPageViewProps}/>;
}

export default MainPage;