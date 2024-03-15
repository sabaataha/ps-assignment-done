import React from 'react';
import './MovieDetails.css'; 
import movie1Image from '../../images/1.jpeg';
import movie2Image from '../../images/2.jpeg';
import movie3Image from '../../images/3.png';
import movie4Image from '../../images/4.jpeg';
import movie5Image from '../../images/5.jpeg';
import movie6Image from '../../images/6.jpeg';

function MovieDetails({ movie, onFavoriteToggle, favorites }) {
    if (!movie) return null;
    
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
    const movieTitleWords = movie.title.split(' ');
    return (
      <div>
        <div className="movieDetailsContainer">
            <h2 className="movieTitleFave" >
              {movieTitleWords.map((word, index) => (
                  <span key={index}>{word}</span>
              ))}
            </h2>
            <img
                src={imageUrl}
                alt={movie.title}
                className='movieImageFave'
            />
            <p className="movieEpisodeId"><strong>Episode:</strong> {movie.episode_id}</p>
      </div>
      <div className="starButtonContainer">
              <button className="starButtonEmpty" onClick={() => onFavoriteToggle(movie,'dislike')} >
                  ☆
              </button>
              <button className="starButton" onClick={() => onFavoriteToggle(movie,'like')}>
                  ★
              </button>
          </div>
      </div>
    );
}

export default MovieDetails;
