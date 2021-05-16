import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import {
  ACTION_BASE_URL,
  COMEDY_BASE_URL,
  HORROR_BASE_URL,
  MYSTERY_BASE_URL,
  POPULAR_BASE_URL,
  ROMANCE_BASE_URL,
  SCIFI_BASE_URL,
  TOPRATED_BASE_URL,
  TRENDING_BASE_URL,
} from '../lib/tmdb';
import { StyledGenreSelector, StyledSelector } from '../styles/StyledGenreSelector';

const options = [
  { value: POPULAR_BASE_URL, label: 'Popular' },
  { value: TRENDING_BASE_URL, label: 'Trending' },
  { value: TOPRATED_BASE_URL, label: 'Top Rated' },
  { value: SCIFI_BASE_URL, label: 'Sci-Fi' },
  { value: ROMANCE_BASE_URL, label: 'Romance' },
  { value: ACTION_BASE_URL, label: 'Action' },
  { value: COMEDY_BASE_URL, label: 'Comedy' },
  { value: HORROR_BASE_URL, label: 'Horror' },
  { value: MYSTERY_BASE_URL, label: 'Mystery' },
];

const GenreSelector = ({ isSearching, selectedGenre, setSelectedGenre }) => {
  const handleChange = (selectedOption) => {
    setSelectedGenre(selectedOption);
  };

  return (
    <StyledGenreSelector>
      <h1>{isSearching ? 'Search Results' : `${selectedGenre.label} Movies`}</h1>
      {!isSearching && (
        <StyledSelector>
          <Select options={options} defaultValue={selectedGenre} onChange={handleChange} />
        </StyledSelector>
      )}
    </StyledGenreSelector>
  );
};

GenreSelector.propTypes = {
  isSearching: PropTypes.bool,
  selectedGenre: PropTypes.object,
  setSelectedGenre: PropTypes.func,
};
export default GenreSelector;
