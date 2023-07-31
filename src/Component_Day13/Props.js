import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Props(property) {
  return (
    <div className='container mt-5'>
        <h1>This is a example to pass parameter in function (component)</h1>
        < img src={process.env.PUBLIC_URL + '/' + property.url} width={300} alt='myimage'/>
    </div>
  )
}
