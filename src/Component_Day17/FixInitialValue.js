import React from 'react';
import { useState } from 'react';

export default function FixInitialValue() {
    // useState Hook
    const [counter , setCounter]= useState(0);
    const Increment = () =>{
        setCounter(counter +1);
    };
    const Decrement = () =>{
        setCounter(counter -1);
    };
  return (
    <div>
        <h1>FixInitialValue</h1>
        <h2>Counter:{counter}</h2>
        <button onClick={Increment}>Increment</button>
        <button style={{marginLeft: "100px"}} onClick={Decrement}>Decrement</button>

    </div>
  )
}
