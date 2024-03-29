import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../lib/tmdb';

export const StyledMovieInfo = styled.div`
  background: ${(props) =>
    props.backdrop ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop}')` : '#000'};
  background-size: cover;
  background-position: center;
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  animation: animateMovieinfo 1s;

  .movieinfo-content {
    display: flex;
    max-width: 1280px;
    min-height: 450px;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 20px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .movieinfo-thumb {
    flex: 1 0 300px;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  .movieinfo-text {
    font-family: Arial, Helvetica, sans-serif;
    padding: 40px;
    color: #fff;
    overflow: hidden;

    h1 {
      font-family: 'Abel', sans-serif;
      font-size: 48px;
      margin: 0;

      @media screen and (max-width: 1000px) {
        font-size: 32px;
      }
    }

    h3 {
      font-size: 16px;
      line-height: 0;
      margin-top: 30px;
    }

    p {
      font-family: 'Abel', sans-serif;
      font-size: 18px;
      line-height: 26px;
    }
  }

  .rating-director {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 10px;
    border-radius: 8px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    /* border-radius: 25px; */
    padding: 8px;
    margin: 0px 0 0 0;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 600px;
    height: auto;
  }

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
