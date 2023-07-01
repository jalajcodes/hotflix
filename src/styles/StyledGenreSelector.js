import styled from 'styled-components';

export const StyledGenreSelector = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px 40px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 'Abel', sans-serif;

  h1 {
    font-family: 'Abel', sans-serif;
    font-size: 42px;

    @media screen and (max-width: 768px) {
      font-size: 22px;
    }
  }

  .genre-selector {
    font-family: 'Abel', sans-serif;
  }
`;

export const StyledSelector = styled.div`
  width: 200px;
`;
