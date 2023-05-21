import React from 'react';

// Define a functional component called MovieCard
const MovieCard = ({ movie }) => {
  // Render the movie card
  return (
    <div className="movie-card">
      {/* Render the movie poster with src and alt from the movie object */}
      <img src={movie.posterURL} alt={movie.title} />
      <div className="movie-info">
        {/* Render the movie title */}
        <h2>{movie.title}</h2>
        {/* Render the movie description */}
        <p>{movie.description}</p>
        {/* Render the movie rating */}
        <p>Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

// Export the MovieCard component as the default export
export default MovieCard;
