import styled from 'styled-components';

export const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;
  box-sizing: border-box;

  .header-content {
    font-family: 'Lobster', cursive;
    max-width: 1280px;
    min-height: 92px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0px;
    margin: 0 auto;
    box-sizing: border-box;

    a {
      color: #fff;
      text-decoration: none;
      font-size: 2.2rem;
      margin-top: 2px;
    }

    @media screen and (max-width: 500px) {
      max-width: 1280px;
      min-height: 0px;
    }
  }

  a.normal {
    font-size: 1.2rem;

    :hover {
      color: yellow;
    }
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 122px;

  @media screen and (max-width: 500px) {
    display: inline-block;
    width: 80px;
    margin-top: 0px;
  }
`;
