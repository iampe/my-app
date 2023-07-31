// CardPicture.js
import React from 'react';
import { Link } from 'react-router-dom';

export default function CardPicture(props) {
  let masterData = props.input;

  return (
    <>
      {masterData.map((obj) => {
        return (
          
            <div key={obj.urlTask} className='col-sm-12 col-md-6 mt-4'>
              <div className="card text-center">
                <img src={obj.urlImg} className="card-img-top rounded mx-auto d-block" alt="SimpleImage" />
                <div className="card-body text-center">
                  <h5 className="card-title">{obj.title}</h5>
                  <h5 className="card-text">{obj.text}</h5>
                  {/* Use Link to navigate to the specific task */}
                  <Link to={obj.urlTask} className="btn btn-primary">Visit Task</Link>
                </div>
              </div>
            </div>
        
        )
      })}
    </>
  )
}
