import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function FirstComponent() {
  return (
    <div className='container mt-5' id="FirstComponent">
      <h1>Abhay</h1>
      <p>This is my page</p>
      <img src={process.env.PUBLIC_URL + '/Image/image1.png'} alt='myimage' />

    </div>
  );
}
