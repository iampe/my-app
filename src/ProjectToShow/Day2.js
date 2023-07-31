import React from 'react';
import { Routes, Route } from "react-router-dom";
import CardPicture from './CardPicture';
import 'bootstrap/dist/css/bootstrap.min.css';
import Demo2 from "../Component_Day14/Demo2";
import DemoF2 from "../Component_Day14/DemoF2";
import DemoFramework from "../Component_Day14/DemoFramework";
import InlineCSS from "../Component_Day14/InlineCSS";
import Rating from "../Component_Day14/Rating";
import Task1 from "../Component_Day14/Task1";

export default function Day2() {
    let data = [
        { title: "Task-1", text: "Display content using Js object", urlImg: "Image/task1.png", urlTask: "Demo2" },
        { title: "Task-2", text: "Display cards using Js object", urlImg: "Image/task2.png", urlTask: "DemoF2" },
        { title: "Task-3", text: "Practice of Bootstrap", urlImg: "Image/task3.png", urlTask: "DemoFramework" },
        { title: "Task-4", text: "Practice of InlineCSS ", urlImg: "Image/task4.png", urlTask: "InlineCSS" },
        { title: "Task-5", text: "Show rating using Js object", urlImg: "Image/task5.png", urlTask: "Rating" },
        { title: "Task-6", text: "Evaluating expression and printing in format", urlImg: "Image/task6.png", urlTask: "Task1" },

    ];
    return (
        <>
            <div className='container mt-5'>
                <h1 className='text-center'>Day-2 Task</h1>
                <div className="row">
                    <CardPicture input={data} />
                </div>
            </div>

            <Routes>
                {/* Define routes for each component */}
                <Route path="Demo2" element={<Demo2/>} />
                <Route path="DemoF2" element={<DemoF2 />} />
                <Route path="DemoFramework" element={<DemoFramework  />} /> {/*We can also pass like this >>>>  url="Image/image2.png" */}
                <Route path="InlineCSS" element={<InlineCSS />} />
                <Route path="Rating" element={<Rating value={3} />} />
                <Route path="Task1" element={<Task1 />} />
            </Routes>

        </>
    )
}
