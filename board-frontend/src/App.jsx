import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./component/Header";
import MainPage from "./component/MainPage";
import WritePage from "./component/WritePage";
import ViewPage from "./component/ViewPage";
import UpdatePage from "./component/UpdatePage";

/*
* 1. zustand 따로 빼서 사용
* 2. function >> () => {}
* 3. 코드 정리(indent, 배치)
* */

const App = () => {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header/>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/write" element={<WritePage/>}/>
                    <Route path="/view/:id" element={<ViewPage/>}/>
                    <Route path="/update/:id" element={<UpdatePage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );

}

export default App;