import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import NavHandel from "./ProjectToShow/NavHandel"
// import Bottom from "./ProjectToShow/Bottom"
// import Viewtodo from './Component_Day18/MyToDoVersion5/Viewtodo';
import Viewtodo from './Component_Day18/Test/Viewtodo';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <NavHandel/>
    <Bottom />  */}
    < Viewtodo/>
   

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
