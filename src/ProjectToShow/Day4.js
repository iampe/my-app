import React from 'react';
import { Routes, Route } from "react-router-dom";
import CardPicture from './CardPicture';
import 'bootstrap/dist/css/bootstrap.min.css';
import FixInitialValue from "../Component_Day17/FixInitialValue";
import LikeDislikeComponent from "../Component_Day17/LikeDislikeComponent";
import PassingThroughProps from "../Component_Day17/PassingThroughProps";
import Thumbs from "../Component_Day17/Thumbs";

export default function Day1() {
    let data = [
        { title: "Task-1", text: "First Component", urlImg: "Image/task1.png", urlTask: "FixInitialValue" },
        { title: "Task-2", text: "Profile", urlImg: "Image/task2.png", urlTask: "LikeDislikeComponent" },
        { title: "Task-3", text: "Practice of PassingThroughProps", urlImg: "Image/task3.png", urlTask: "PassingThroughProps" },
        { title: "Task-5", text: "Thumbs PassingThroughProps", urlImg: "Image/task4.png", urlTask: "Thumbs" },

    ];
    return (
        <>
            <div className='container mt-5'>
                <h1 className='text-center fs-1'>Day-4 Task</h1>
                <div className="row">
                    <CardPicture input={data} />
                </div>
            </div>

            <Routes>
                {/* Define routes for each component */}
                <Route path="FixInitialValue" element={<FixInitialValue />} />
                <Route path="LikeDislikeComponent" element={<LikeDislikeComponent />} />
                <Route path="PassingThroughProps" element={<PassingThroughProps url={100} />} /> {/*We can also pass like this >>>>  url="Image/image2.png" */}
                <Route path="Thumbs" element={<Thumbs />} />
            </Routes>

        </>
    )
}
