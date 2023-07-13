import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const CommentRating = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div>
      <p>Notez le commentaire :</p>
      <Rating
        ratingValue={rating}
        size={30}
        onClick={handleRating}
      />
     
    </div>
  );
};

export default CommentRating;
