
import React from 'react';
import "../index.css";

const Rating = ({ value }) => {

  const checkedStars = Math.min(Math.round(value), 5);
  const uncheckedStars = 5 - checkedStars;

  const stars = Array.from ( { length: checkedStars }, () => (
    <span className="checked-star">&#9733;</span>
  )).concat(
    Array.from({ length: uncheckedStars }, () => (
      <span className="unchecked-star">&#9734;</span>
    ))
  );

  return <div className="rating">{stars}</div>;
};

export default Rating;









// Anthor version of code is given below

// const Rating = ({ value }) => {
//   // Calculate the number of checked and unchecked stars
//   const checkedStars = Math.min(Math.round(value), 5);
//   const uncheckedStars = 5 - checkedStars;

//   // Create an array of stars based on the checked and unchecked count
//   const stars = Array.from ( { length: checkedStars }, (_, index) => (
//     <span key={index} className="checked-star">&#9733;</span>
//   )).concat(
//     Array.from({ length: uncheckedStars }, (_, index) => (
//       <span key={index} className="unchecked-star">&#9734;</span>
//     ))
//   );

//   return <div className="rating">{stars}</div>;
// };



