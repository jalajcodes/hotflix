const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;
const TRENDING_BASE_URL = `${API_URL}trending/movie/week?api_key=${API_KEY}&language=en-US`;
const TOPRATED_BASE_URL = `${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`;
const ACTION_BASE_URL = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=28`;
const COMEDY_BASE_URL = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=35`;
const HORROR_BASE_URL = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=27`;
const ROMANCE_BASE_URL = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=10749`;
const MYSTERY_BASE_URL = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=9648`;
const SCIFI_BASE_URL = `${API_URL}discover/movie?api_key=${API_KEY}&with_genres=878`;

const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';
const BACKDROP_SIZE = 'w1280';
const POSTER_SIZE = 'w500';

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  TRENDING_BASE_URL,
  TOPRATED_BASE_URL,
  ACTION_BASE_URL,
  COMEDY_BASE_URL,
  SCIFI_BASE_URL,
  HORROR_BASE_URL,
  ROMANCE_BASE_URL,
  MYSTERY_BASE_URL,
};
