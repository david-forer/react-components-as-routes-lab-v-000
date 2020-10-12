import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
<<<<<<< HEAD
      <h1>Directors Page</h1>
=======
     <h1>Directors Page</h1>
>>>>>>> f77b38320fb7cf2ffcad5da80996a6d5493505d7
      {directors.map(director => {
        return <div key={director.name}>
          <h3>{director.name}</h3>
          <ul><strong>Movies</strong></ul>
          <ul>
            {director.movies.map(movie => {
              return <li key={movie}>
                {movie}
              </li>
            })}
          </ul>
<<<<<<< HEAD
          <hr></hr>
        </div>
      })}
=======
         
>>>>>>> f77b38320fb7cf2ffcad5da80996a6d5493505d7
    </div>
  );
}

export default Directors
