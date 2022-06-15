import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./component/Header";
import Main from "./component/Main";
import Write from "./component/Write";
import View from "./component/View";
import Update from "./component/Update";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Main/>}/>
                        <Route path="/write" element={<Write/>}/>
                        <Route path="/view/:id" element={<View/>}/>
                        <Route path="/update/:id" element={<Update/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;