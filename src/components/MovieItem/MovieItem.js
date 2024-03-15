import React from 'react';
import './MovieItem.css'; 
import movie1Image from '../../images/1.jpeg'
import movie2Image from '../../images/2.jpeg'
import movie3Image from '../../images/3.png'
import movie4Image from '../../images/4.jpeg'
import movie5Image from '../../images/5.jpeg'
import movie6Image from '../../images/6.jpeg'

function MovieItem({ movie, onMovieSelect }) {

  const getImageByMovieId = (episode_id) => {
    switch (episode_id) {
      case 1:
        return movie1Image;
      case 2:
        return movie2Image;
      case 3:
        return movie3Image;
      case 4:
        return movie4Image;
      case 5:
        return movie5Image;
      case 6:
        return movie6Image;
      default:
        return null;
    }
  };
  const imageUrl = getImageByMovieId(movie.episode_id);
  return (
    <div className="movie-item">
      <img
        src={imageUrl} 
        alt={movie.title}
        onClick={() => onMovieSelect(movie)}
        className='movieImage'
      />
      <div className="movie-title">{movie.title}</div>
    </div>
  );
}

export default MovieItem;
