// import React, { useState } from 'react';
// const LikeDislikeComponent = () => {
//   const [likes, setLikes] = useState(10);
//   const [dislikes, setDislikes] = useState(0);
//   const [isLiked, setIsLiked] = useState(false);
//   const [isDisliked, setIsDisliked] = useState(false);

//   const handleLike = () => {
//     if (!isLiked) {
//       setLikes((prevLikes) => prevLikes + 1);
//       setIsLiked(true);
      
//       // If the video was previously disliked, remove the dislike
//       if (isDisliked) {
//         setDislikes((prevDislikes) => prevDislikes - 1);
//         setIsDisliked(false);
//       }
//     }
//   };

//   const handleDislike = () => {
//     if (!isDisliked) {
//       setDislikes((prevDislikes) => prevDislikes + 1);
//       setIsDisliked(true);
      
//       // If the video was previously liked, remove the like
//       if (isLiked) {
//         setLikes((prevLikes) => prevLikes - 1);
//         setIsLiked(false);
//       }
//     }
//   };

//   return (
//     <div>
//       <div>
//         <button onClick={handleLike} style={{ color: isLiked ? 'blue' : 'black' }}>
//           Like ({likes})
//         </button>
//         <button onClick={handleDislike} style={{ color: isDisliked ? 'blue' : 'black' }}>
//           Dislike ({dislikes})
//         </button>
//       </div>
//     </div>
//   );
// };
// export default LikeDislikeComponent;


import React, { useState } from 'react';

const LikeDislikeComponent = () => {
  const [likes, setLikes] = useState(110);
  const [dislikes, setDislikes] = useState(10);
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      setLikes((prevLikes) => prevLikes + 1);
      setIsLiked(true);

      if (isDisliked) {
        setDislikes((prevDislikes) => prevDislikes - 1);
        setIsDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (!isDisliked) {
      setDislikes((prevDislikes) => prevDislikes + 1);
      setIsDisliked(true);

      if (isLiked) {
        setLikes((prevLikes) => prevLikes - 1);
        setIsLiked(false);
      }
    }
  };

  return (
    <div>
      <div>
        <button
          onClick={handleLike}
          style={{ color: isLiked ? 'white' : 'black', backgroundColor: isLiked ? 'blue' : 'transparent' }}
        >
          Like ({likes})
        </button>
        <button
          onClick={handleDislike}
          style={{ color: isDisliked ? 'white' : 'black', backgroundColor: isDisliked ? 'blue' : 'transparent' }}
        >
          Dislike ({dislikes})
        </button>
      </div>
    </div>
  );
};

export default LikeDislikeComponent;
