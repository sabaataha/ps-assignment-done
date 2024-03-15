import React from 'react';
import './MovieFilter.css';

function MovieFilter({ sortOrder, onSortOrderChange }) {
  return (
    <div className="movie-sort-dropdown">
      <label className="dropdown-label" htmlFor="sortOrder">Sort by:</label>
      <select className="dropdown-select" id="sortOrder" value={sortOrder} onChange={onSortOrderChange}>
        <option value="initial">Default Order (Episode Number)</option>
        <option value="asc">Ascending Order (Episode Number)</option>
        <option value="desc">Descending Order (Episode Number)</option>
      </select>
    </div>
  );
}

export default MovieFilter;
