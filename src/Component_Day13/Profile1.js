import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export  default function Profile1() {
  return (
    <h1 className='container mt-5'>Profile1</h1>
  );
}
  export function Gallery() {
    return (
      <div>
       <h1> Gallery1</h1>
       <img src={process.env.PUBLIC_URL + '/Image/image3.png'} alt='myimage' />

      </div>
    );
    }
