import React from "react";
import style from '../style/Main.module.css';
import { AgGridReact} from "ag-grid-react";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const MainPageView = ({
    onClick,
    columnDefs,
    rowData
}) => {
    console.log("column"+columnDefs);
    return (
        <div className={style.main_div}>
            <button type="button" className="btn btn-white btn-outline-primary" onClick={onClick}>글쓰기</button>

            {/*    aggrid    */}
            <div className="ag-theme-alpine" style={{width: '60vw', height:'48vh', margin:"25px 0 0 15vw"}}>
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

export default MainPageView;