// src/components/MovieList.js
import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => (
  <div className="movie-list">
    {movies.map((movie, index) => (
      <MovieCard
        key={index}
        title={movie.title}
        description={movie.description}
        posterURL={movie.posterURL}
        rating={movie.rating}
      />
    ))}
  </div>
);

export default MovieList;
