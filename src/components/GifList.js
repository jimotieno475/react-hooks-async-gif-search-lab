import React from 'react';

export default function GifList({ gifs }) {
  return (
    <div>
      <ul>
        {gifs.map((gif) => (
          <li key={gif.url}>
            <img src={gif.images.original.url} alt={`GIF ${gif.id}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}
