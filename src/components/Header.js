import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import { StyledHeader } from '../styles/StyledHeader';

const Header = () => (
  <StyledHeader>
    <div className="header-content">
      <Link to="/">
        <FontAwesome className="fa-film" name="film" /> Hotflix
      </Link>

      <Link to="/favourites" className="normal">
        Favourites
      </Link>
    </div>
  </StyledHeader>
);

export default Header;
