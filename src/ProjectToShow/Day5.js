import React from 'react';
import { Routes, Route } from "react-router-dom";
import CardPicture from './CardPicture';
import 'bootstrap/dist/css/bootstrap.min.css';
import Viewtodo from '../Component_Day18/MyToDoVersion1/Viewtodo';


export default function Day1() {
    let data = [
        { title: "Task-1", text: "ToDo Page ", urlImg: "Image/task1.png", urlTask: "Viewtodo" },

    ];
    return (
        <>
            <div className='container mt-5'>
                <h1 className='text-center fs-1'>Day-5 Task</h1>
                <div className="row">
                    <CardPicture input={data} />
                </div>
            </div>

            <Routes>
                {/* Define routes for each component */}
                <Route path="Viewtodo" element={<Viewtodo/>} />
            </Routes>

        </>
    )
}
