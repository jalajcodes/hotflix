/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import FontAwesome from 'react-fontawesome';
import { StyledMovieThumb } from '../styles/StyledMovieThumb';

const MovieThumb = ({ image, movieId, clickable, handleStarClick, favMovies }) => {
  const starred = favMovies
    ? favMovies.findIndex((movie) => Number(movie.movieId) === Number(movieId)) !== -1
    : false;

  return (
    <StyledMovieThumb>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img className="clickable" src={image} alt="moviethumb" />
          <div
            className="favourite"
            title="Star"
            role="button"
            onClick={(e) => handleStarClick(e, movieId, image)}
          >
            <FontAwesome
              className="fa solid fa-star"
              name="star"
              size="2x"
              style={{ color: starred ? 'yellow' : 'white' }}
            />
          </div>
        </Link>
      ) : (
        <img src={image} alt="moviethumb" />
      )}
    </StyledMovieThumb>
  );
};

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default MovieThumb;
