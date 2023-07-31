import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Second() {
  return (
    <div className='container mt-5'>
   < img src={process.env.PUBLIC_URL + '/Image/image4.png'} alt='myimage'/>
    </div>
  );
}
