// import React, {useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

// export default function YoutubeLikeDislike() {
//     // useState Hook
//     const [likes, setLikes] = useState(110);
//     const [dislikes, setDislikes] = useState(10);
//     const [isLiked, setIsLiked] = useState(false);
//     const [isDisliked, setIsDisliked] = useState(false);


//     const handleLike = () => {
//         if (!isLiked) {
//           setLikes((prevLikes) => prevLikes + 1);
//           setIsLiked(true);
    
//           if (isDisliked) {
//             setDislikes((prevDislikes) => prevDislikes - 1);
//             setIsDisliked(false);
//           }
//         }
//     };

//     const handleDislike = () => {
//             if (!isDisliked) {
//               setDislikes((prevDislikes) => prevDislikes + 1);
//               setIsDisliked(true);
        
//               if (isLiked) {
//                 setLikes((prevLikes) => prevLikes - 1);
//                 setIsLiked(false);
//               }
//             }
//       };
    

//   return (
    
//     <div> 
//         <span><b>Likes :</b> {likes}</span>
//         <FontAwesomeIcon icon={faThumbsUp} size='2xl' color={isLiked ? 'green' : 'black'} onClick={handleLike} style={{marginLeft: "20px"}}/>
//         <span><b>Dislike :</b> {dislikes}</span>
//         <FontAwesomeIcon icon={faThumbsDown} size='2xl' color={isDisliked ? 'green' : 'black'} onClick={handleDislike} style={{marginLeft: "20px"}}/>
            
//     </div>
      
//   )
// }

import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

export default function YoutubeLikeDislike() {
    // useState Hook
    const [likes, setLikes] = useState(110);
    const [dislikes, setDislikes] = useState(10);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);


    const handleLike = () => {
        if (!isLiked) {
          setLikes(likes + 1);
          setIsLiked(true);
    
          if (isDisliked) {
            setDislikes(dislikes - 1);
            setIsDisliked(false);
          }
        }
    };

    const handleDislike = () => {
            if (!isDisliked) {
              setDislikes( dislikes + 1);
              setIsDisliked(true);
        
              if (isLiked) {
                setLikes( likes - 1);
                setIsLiked(false);
              }
            }
      };
    

  return (
    
    <div> 
        <span><b>Likes :</b> {likes}</span>
        <FontAwesomeIcon icon={faThumbsUp} size='2xl' color={isLiked ? 'green' : 'black'} onClick={handleLike} style={{marginLeft: "20px"}}/>
        <span><b>Dislike :</b> {dislikes}</span>
        <FontAwesomeIcon icon={faThumbsDown} size='2xl' color={isDisliked ? 'green' : 'black'} onClick={handleDislike} style={{marginLeft: "20px"}}/>
            
    </div>
      
  )
}

