import React, { useContext } from 'react';
import { MovieContext } from '../components/MovieContext';

// Define a functional component called Filter
const Filter = () => {
  // Get the state values and setter functions from MovieContext using useContext
  const { titleFilter, ratingFilter, setTitleFilter, setRatingFilter } = useContext(MovieContext);

  // Event handler for title input change
  const handleTitleChange = (event) => {
    setTitleFilter(event.target.value);
  };

  // Event handler for rating input change
  const handleRatingChange = (event) => {
    setRatingFilter(event.target.value);
  };

  // Render the component
  return (
    <div className="filters">
      {/* Input field for title filter */}
      <input
        type="text"
        placeholder="Title"
        value={titleFilter}
        onChange={handleTitleChange}
      />
      {/* Input field for rating filter */}
      <input
        type="number"
        placeholder="Minimum Rating"
        value={ratingFilter}
        onChange={handleRatingChange}
      />
    </div>
  );
};

// Export the Filter component as the default export
export default Filter;
