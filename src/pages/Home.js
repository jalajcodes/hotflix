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

const Home = () => {
  const [selectedGenre, setSelectedGenre] = useState({ value: POPULAR_BASE_URL, label: 'Popular' });
  const [searchTerm, setSearchTerm] = useState('');
  const [favMovies, setFavMovies] = useLocalStorageState('favourites', {
    defaultValue: [],
  });

  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error,
    },
    fetchMovies,
  ] = useHomeFetch(searchTerm);

  useEffect(() => {
    fetchMovies(selectedGenre.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedGenre.value]);

  const searchMovies = (search) => {
    const searchTerm = search.trim(); // we don't want blank spaces

    setSearchTerm(searchTerm);

    // this removes searchResults (refetches the previously selected genre) when search is empty.
    const endpoint = searchTerm.length > 0 ? SEARCH_BASE_URL + searchTerm : selectedGenre.value;
    fetchMovies(endpoint);
  };

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
    const movieEndpoint = `${selectedGenre.value}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : movieEndpoint;

    fetchMovies(endpoint);
  };

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

  if (error) return <div>Something went wrong ...</div>;
  if (!movies[0]) return <Spinner />;

  return (
    <>
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
      )}
      <SearchBar callback={searchMovies} />
      <GenreSelector
        isSearching={!!searchTerm}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />
      <Grid>
        {movies.map((movie) => (
          <MovieThumb
            key={movie.id}
            clickable
            image={movie.poster_path ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path : NoImage}
            movieId={movie.id}
            movieName={movie.original_title}
            favMovies={favMovies}
            handleStarClick={handleStarClick}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && <LoadMoreBtn callback={loadMoreMovies} />}
    </>
  );
};

export default Home;
