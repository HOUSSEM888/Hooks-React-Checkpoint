// src/App.js
import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import StarRatingComponent from 'react-star-rating-component';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([{
    title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
      rating: 3
  },

 {
      title: 'Into the Deep',
      description: 'A sci-fi shark movies.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BYWI2YjhhM2MtZmMxYi00ZTlhLTgxZTgtZTljMmQzZGEyMzkwXkEyXkFqcGc@._V1_.jpg',
      rating: 5
    },

    {
      title: 'Layers of lies',
      description: 'Action Movies.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwy6EGC85jQi-0Iigiz5JURopdjKcGzSBZQQ&s',
      rating: 2.0
    },

    {
      title: 'Lift',
      description: 'Action Movies.',
      posterURL: 'https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/11/lift_xlg.jpg',
      rating: 4.0
    },
    
   {
    title: 'Imaginary',
    description: 'Horror Movies.',
    posterURL: 'https://m.media-amazon.com/images/M/MV5BM2Q2NjYzYzItNjAzYi00YzAwLWIyN2EtNDJkMzZkZGM1NTc2XkEyXkFqcGc@._V1_.jpg',
    rating: 1.0
   },
   {
    title: 'Sting',
    description: 'Horror Movies.',
    posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaxERNpWI-SepgwPWG9XVTwnLb3gB3gjq7Ug&s',
    rating: 2.0
   }


  ]);
  const [filterTitle, setFilterTitle] = useState('');
  const [filterRating, setFilterRating] = useState(''); 
  const [newMovie, setNewMovie] = useState({
    title: '',
    description: '',
    posterURL: '',
    rating: 1

  });

  

  const addMovie = () => {
    setMovies([...movies, newMovie]);
    setNewMovie({ title: '', description: '', posterURL: '', rating: 1 });
  };

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating ? movie.rating >= parseFloat(filterRating) : true)
    );
  });

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter
        filterTitle={filterTitle}
        filterRating={filterRating}
        setFilterTitle={setFilterTitle}
        setFilterRating={setFilterRating}
      />
      <div className="add-movie">
        <h2>Add New Movie</h2>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
        />
        <StarRatingComponent
          name="newMovieRating"
          starCount={5}
          value={newMovie.rating}
          onStarClick={(nextValue) => setNewMovie({ ...newMovie, rating: nextValue })}
          starColor="#ffb400"
          emptyStarColor="#333"
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
