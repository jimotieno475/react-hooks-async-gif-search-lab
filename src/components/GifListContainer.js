import React, { useEffect, useState } from 'react';
import GifSearch from './GifSearch';
import GifList from './GifList';

export default function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState(''); // State to store the search query

  useEffect(()=>(
    fetchGifs()
  ))
  const fetchGifs = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then((response) => response.json())
      .then((data) => {
        // Extract the first 3 gifs from the response
        const firstThreeGifs = data.data.slice(0, 3);
        setGifs(firstThreeGifs);
      });
  };

  // Function to handle form submission from GifSearch
  const handleSearchSubmit = (newQuery) => {
    setQuery(newQuery);
    fetchGifs();
  };

  return (
    <div>
      <GifSearch onSearchSubmit={handleSearchSubmit} />
      {gifs.length > 0 ? (
        <GifList gifs={gifs} />
      ) : (
        <p>No GIFs found. Please search for something.</p>
      )}
    </div>
  );
}
