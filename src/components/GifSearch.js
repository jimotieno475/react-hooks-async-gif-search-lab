import React, { useState } from 'react';

export default function GifSearch({ onSearchSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(searchQuery); // Invoke the callback prop with the search query
  };
  function handleChange(event) {
    setSearchQuery(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
        <input
          id="search"
          className="form-control"
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search for GIFs"
        />
        </div>
        <button type="submit" className='btn btn-success'>Search</button>
      </form>
    </div>
  );
}
