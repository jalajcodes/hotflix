import React, { useLayoutEffect } from 'react';

import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import MovieInfo from '../components/MovieInfo';
import MovieInfoBar from '../components/MovieInfoBar';
import Actor from '../components/Actor';
import Grid from '../components/Grid';
import Spinner from '../components/Spinner';

import { useMovieFetch } from '../hooks/useMovieFetch';

const Movie = () => {
  const { movieId } = useParams();
  const [movie, loading, error] = useMovieFetch(movieId);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (error) return <div>Something went wrong ...</div>;
  if (loading) return <Spinner />;

  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
