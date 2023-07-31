import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function Thumbs(props) {
    // useState Hook
    const [color , setColor]= useState(null);
    const [like , setLike]= useState(parseInt(props.count));
    const onclick =() => {
        if (color==="green"){
            setColor("black");
            setLike(like -1);
        } 
        else {
            setColor("green");
            setLike(like +1);
        }
        
    };

  return (
    <div>
        <h1 style={{marginTop: "100px"}}>Thumbs</h1>
        <span><b>Likes :</b> {like}</span>
        <FontAwesomeIcon icon={faThumbsUp} size='2xl' color={color} onClick={onclick} style={{marginLeft: "20px"}}/>
    </div>
  )
}
