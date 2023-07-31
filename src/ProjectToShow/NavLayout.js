import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import diamondLogo from './diamondLogo.svg';
import {  Outlet, Link } from 'react-router-dom';

export default function NavLayout() {
    return (
        <>
            <div className='container-fluid'>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand fs-1" to="/home"><img src={diamondLogo} alt="brand icon" height="50"/>Abhay</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active fs-4" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active fs-4" aria-current="page" to="/day1">Day1</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active fs-4" aria-current="page" to="/day2">Day2</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active fs-4" aria-current="page" to="/day3">Day3</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active fs-4" aria-current="page" to="/day4">Day4</Link>
                                </li>
                                
                                {/* <li className="nav-item dropdown me-2">
                                    <Link className="nav-link active dropdown-toggle fs-4" to="/day1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Day1
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/task1">Task1</Link></li>
                                        <li><Link className="dropdown-item" to="/task2">Task2</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item" to="/task3">Task3</Link></li>
                                        <li><Link className="dropdown-item" to="/task4">Task4</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <Link className="nav-link active dropdown-toggle fs-4" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Day2
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/task1">Task1</Link></li>
                                        <li><Link className="dropdown-item" to="/task2">Task2</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item" to="/task3">Task3</Link></li>
                                        <li><Link className="dropdown-item" to="/task4">Task4</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item   dropdown me-2">
                                    <Link className="nav-link active dropdown-toggle fs-4" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Day3
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/task1">Task1</Link></li>
                                        <li><Link className="dropdown-item" to="/task2">Task2</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item" to="/task3">Task3</Link></li>
                                        <li><Link className="dropdown-item" to="/task4">Task4</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item  dropdown me-2">
                                    <Link className="nav-link active dropdown-toggle fs-4" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Day4
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="/task1">Task1</Link></li>
                                        <li><Link className="dropdown-item" to="/task2">Task2</Link></li>
                                        <li><hr className="dropdown-divider"/></li>
                                        <li><Link className="dropdown-item" to="/task3">Task3</Link></li>
                                        <li><Link className="dropdown-item" to="/task4">Task4</Link></li>
                                    </ul>
                                </li> */}

                            </ul>
                        </div>
                    </div> 
                </nav>       
            </div>
            <div className='Container'>
            <Outlet />
            </div>
            
            
        </>

    );
}

