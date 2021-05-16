import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
  img {
    display: block;
    width: 100%;
    transition: all 0.18s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateMovieThumb 0.5s;

    :hover {
      opacity: 0.8;
    }

    @keyframes animateMovieThumb {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  .clickable {
    cursor: pointer;

    :hover {
      transform: scale(1.1);
    }
  }
`;
