import React from 'react';
import PropTypes from 'prop-types';

import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn';

const LoadMoreBtn = ({ callback }) => (
  <StyledLoadMoreBtn type="button" onClick={callback}>
    Load More
  </StyledLoadMoreBtn>
);

LoadMoreBtn.propTypes = {
  callback: PropTypes.func,
};

export default LoadMoreBtn;
