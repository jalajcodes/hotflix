import styled from 'styled-components';

export const StyledMovieThumb = styled.div`
  position: relative;

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
    position: relative;

    :hover {
      transform: scale(1.1);
    }
  }

  .favourite {
    color: #fff;
    position: absolute;
    right: 50%;
    top: 50%;
    transform: translate(50%, -50%);
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
  }

  :hover .favourite {
    visibility: visible;
    opacity: 1;
  }
`;
