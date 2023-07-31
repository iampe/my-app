import React from 'react';
import "../index.css";





export default function InlineCSS() {
  return (
    <>
    <h1 style = { {color:"red",  border: "5px solid yellow", textAlign: "center"} }>InlineCSS</h1>

    <h1>My First Heading</h1>
    <h1 className='abc'>External CSS</h1>
    </>
  )
}
