import React, { useState, useEffect } from 'react';
import { fetchMovies } from '@/services/api';
import MovieItem from '@/components/MovieItem/MovieItem';
import Loading from '@/components/Loading/Loading';
import './MovieList.css';
import { flushSync } from 'react-dom';
function MovieList({ onMovieSelect, sortOrder }) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAndSetMovies() {
      try {
        const data = await fetchMovies();
        setMovies(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed fetching movies:", error);
        setIsLoading(false);
      }
    }

    fetchAndSetMovies();
  }, []); 

 
  useEffect(() => {
    if (movies.length > 0) {
      let sortedMovies;

      if (sortOrder === 'asc') {
        sortedMovies = [...movies.sort((a, b) => a.properties.episode_id - b.properties.episode_id)];
      } else if (sortOrder === 'desc') {
        sortedMovies = [...movies.sort((a, b) => b.properties.episode_id - a.properties.episode_id)];
      } else {
        const customOrder = [1, 4, 2, 3, 5, 6];
        sortedMovies = [...movies.sort((a, b) => customOrder.indexOf(a.properties.episode_id) - customOrder.indexOf(b.properties.episode_id))];
      }

      setMovies(sortedMovies);
    }
  }, [sortOrder]); 

  return (
    <div className='movie-list-container'>
      {isLoading ? (
        <Loading message="Loading Movies..." />
      ) : (
        movies.map(movie => (
          <MovieItem key={movie.properties.episode_id} movie={movie.properties} onMovieSelect={onMovieSelect} />
        ))
      )}
    </div>
  );
}

export default MovieList;
