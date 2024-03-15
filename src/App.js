import React, { useState, useEffect } from 'react';
import MovieList from '@/components/MovieList/MovieList';
import MovieDetails from '@/components/MovieDetails/MovieDetails';
import MovieFilter from '@/components/MovieFilter/MovieFilter';

function App() {
  const initialFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(initialFavorites);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleFavorite = (movie,action) => {
    if (action === 'like') {
      if (!favorites.some(fav => fav.episode_id === movie.episode_id)) {
        setFavorites([...favorites, movie]);
      }
    } else if (action === 'dislike') {
      setFavorites(favorites.filter(fav => fav.episode_id !== movie.episode_id));
    }
    
  };

  function handleMovieSelect(movie) {
    setSelectedMovie(movie);
  }
  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };
  
  return (
    <div className="App">
      <MovieFilter sortOrder={sortOrder} onSortOrderChange={handleSortOrderChange}/>
      <MovieDetails movie={selectedMovie} onFavoriteToggle={handleFavorite} favorites={favorites} />
      <MovieList sortOrder={sortOrder} onMovieSelect={handleMovieSelect}/>
    </div>
  );

}

export default App;