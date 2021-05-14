import styled from 'styled-components';

export const StyledMovieInfoBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100px;
  height: auto;
  background: #1c1c1c;
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Abel', sans-serif;
  font-size: 20px;

  .movieinfobar-content {
    display: flex;
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    color: #fff;
  }

  .movieinfobar-content-col {
    display: flex;
    align-items: center;
    width: 33.33%;
    padding: 0 20px 0 0;
  }

  .movieinfobar-info {
    padding: 0 0 0 10px;
  }

  @media screen and (max-width: 768px) {
    .fa-time,
    .fa-revenue,
    .fa-budget {
      display: none;
    }
  }

  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;
