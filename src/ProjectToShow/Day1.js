import React from 'react';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardPicture from './CardPicture';
import FirstComponent from "../Component_Day13/FirstComponent";
import Profile1 from "../Component_Day13/Profile1";
import Props from "../Component_Day13/Props";
import Second from "../Component_Day13/Second";

export default function Day1() {
    let data = [
        { title: "Task-1", text: "First Component", urlImg: "Image/task1.png", urlTask: "FirstComponent" },
        { title: "Task-2", text: "Profile", urlImg: "Image/task2.png", urlTask: "Profile1" },
        { title: "Task-3", text: "Practice of props", urlImg: "Image/task3.png", urlTask: "Props" },
        { title: "Task-4", text: "Second Props", urlImg: "Image/task4.png", urlTask: "Second" },

    ];
    return (
        <>
            <div className='container mt-5'>
                <h1 className='text-center fs-1'>Day-1 Task</h1>
                <div className="row">
                    <CardPicture input={data} />
                </div>
            </div>

            <Routes>
                {/* Define routes for each component */}
                <Route path="FirstComponent" element={<FirstComponent />} />
                <Route path="Profile1" element={<Profile1 />} />
                <Route path="Props" element={<Props url={"Image/image2.png"} />} /> {/*We can also pass like this >>>>  url="Image/image2.png" */}
                <Route path="Second" element={<Second />} />
            </Routes>

        </>
    )
}
