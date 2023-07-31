import React from 'react';
import { useState } from 'react';
import "../index.css"

export default function PassingThroughProps(props) {
    // here props.count is a string value So we will have to convert this into numerical value
    let x = parseInt(props.count);
    // useState Hook
    const [counter , setCounter]= useState(x);
    const Increment = () =>{
        setCounter(counter +1);
    };
    const Decrement = () =>{
        setCounter(counter -1);
    };
  return (
    <div>
        <h1 style={{marginTop: "100px"}}>PassingThroughProps</h1>
        <h2>Counter:{counter}</h2>
        <button onClick={Increment} >Increment</button>
        <button style={{marginLeft: "100px"}} onClick={Decrement}>Decrement</button>
    </div>
  )
}
