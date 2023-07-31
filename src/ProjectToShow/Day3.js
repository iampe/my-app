import React from 'react';
import { Routes, Route } from "react-router-dom";
import CardPicture from './CardPicture';
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayProduct from "../Component_Day15/DisplayProduct";
// import Menu from "../Component_Day15/Menu";
// import NavMenu from "../Component_Day15/NavMenu";


export default function Day3() {
    let data = [
        
        { title: "Task-3", text: "Practice of DisplayProduct", urlImg: "Image/task3.png", urlTask: "DisplayProduct" },
      

    ];
    return (
        <>
            <div className='container mt-5'>
                <h1 className='text-center fs-1'>Day-3 Task</h1>
                <div className="row">
                    <CardPicture input={data} />
                </div>
                {/* <p> In day 3 two tasks are more , but in one Router we can not show other Router.And one task is To crete navbar without bootstrap and other one with bootstrap .</p> */}
            </div>

            <Routes>
                {/* Define routes for each component */}
                
                <Route path="DisplayProduct" element={<DisplayProduct />} /> 
               
            </Routes>

        </>
    )
}
