import React, { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state';

import {
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
} from '../lib/tmdb';

import HeroImage from '../components/HeroImage';
import SearchBar from '../components/SearchBar';
import Grid from '../components/Grid';
import MovieThumb from '../components/MovieThumb';
import LoadMoreBtn from '../components/LoadMoreBtn';
import Spinner from '../components/Spinner';
import GenreSelector from '../components/GenreSelector';

import { useHomeFetch } from '../hooks/useHomeFetch';

import NoImage from '../assets/no_image.jpg';

const Favourites = () => {
  const [favMovies, setFavMovies] = useLocalStorageState('favourites', {
    defaultValue: [],
  });

  const handleStarClick = (e, movieId, image) => {
    e.preventDefault();

    const movieIndex = favMovies.findIndex((movie) => Number(movie.movieId) === Number(movieId));

    if (movieIndex === -1) {
      setFavMovies([
        ...favMovies,
        {
          movieId,
          image,
        },
      ]);
    } else {
      setFavMovies(favMovies.filter((movie) => Number(movie.movieId) !== Number(movieId)));
    }
  };

  return (
    <Grid header="Favourite Movies">
      {favMovies && favMovies.length > 0 ? (
        favMovies.map((movie) => (
          <MovieThumb
            key={movie.movieId}
            clickable
            image={movie.image}
            movieId={movie.movieId}
            favMovies={favMovies}
            handleStarClick={handleStarClick}
          />
        ))
      ) : (
        <div>Not favourites found.</div>
      )}
    </Grid>
  );
};

export default Favourites;
