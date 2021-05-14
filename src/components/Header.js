import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import TMDBLogo from '../assets/tmdb_logo.svg';

import { StyledHeader, StyledTMDBLogo } from '../styles/StyledHeader';

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <Link to="/">
        <FontAwesome className="fa-film" name="film" /> Hotflix
      </Link>
      <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
    </div>
  </StyledHeader>
);

export default Header;
