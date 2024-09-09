// src/components/Filter.js
import React from 'react';

const Filter = ({ filterTitle, filterRating, setFilterTitle, setFilterRating }) => (
  <div className="filter">
    <input
      type="text"
      placeholder="Filter by title"
      value={filterTitle}
      onChange={(e) => setFilterTitle(e.target.value)}
    />
    <input
      type="number"
      placeholder="Filter by rating"
      value={filterRating}
      onChange={(e) => setFilterRating(e.target.value)}
      min="1"
      max="5"
    />
  </div>
);

export default Filter;
