import React, { useState } from 'react';
import MovieCard from './MovieCard';

// Define a functional component called MovieList
const MovieList = () => {
  // Set up state variables using useState
  const [movies, setMovies] = useState([
    // Initial movie data
    {
      title: 'The Shawshank Redemption',
      description:
        'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg',
      rating: 9.3,
    },
    {
      title: 'The Godfather',
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      posterURL:
        'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
      rating: 9.2,
    },
  ]);

  // Set up state variables for title and rating filters
  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  // Event handler for title filter change
  const handleTitleFilterChange = (event) => {
    setTitleFilter(event.target.value);
  };

  // Event handler for rating filter change
  const handleRatingFilterChange = (event) => {
    setRatingFilter(event.target.value);
  };

  // Event handler for adding a movie
  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  // Filter the movies based on title and rating filters
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  // Render the component
  return (
    <div>
      <div className="filters">
        {/* Input field for title filter */}
        <input
          type="text"
          placeholder="Title"
          value={titleFilter}
          onChange={handleTitleFilterChange}
        />
        {/* Input field for rating filter */}
        <input
          type="number"
          placeholder="Minimum Rating"
          value={ratingFilter}
          onChange={handleRatingFilterChange}
        />
      </div>
      <div className="movie-list">
        {/* Render MovieCard components for each filtered movie */}
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
      {/* Button to add a new movie */}
      <button onClick={() => handleAddMovie({ title: 'New Movie', rating: 0 })}>
        Add Movie
      </button>
    </div>
  );
};

// Export the MovieList component as the default export
export default MovieList;
