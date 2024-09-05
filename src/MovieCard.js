// src/components/MovieCard.js
import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({ title, description, posterURL, rating }) => (
  <div className="movie-card">
    <img src={posterURL} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
    <StarRatingComponent
      name={title}
      starCount={5}
      value={rating}
      editing={false}
      starColor="#ffb400"
      emptyStarColor="#333"
    />
  </div>
);

export default MovieCard;
