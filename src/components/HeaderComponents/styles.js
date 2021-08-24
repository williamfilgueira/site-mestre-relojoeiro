import styled from "styled-components";

export const Header = styled.header`
  a {
    text-decoration: none;
    color: black;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const BoxLogo = styled.div`
  flex: 1 1 auto;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    h3 {
      font-size: 4em;
    }
  }
`;

export const Nav = styled.nav`
  flex: 1 1 300px;
  ul {
    margin-left: 5em;

    display: flex;
    justify-content: center;
    gap: 2.5em;
    list-style: none;

    li {
      :hover {
        transform: scale(1.03);
      }
      a {
        font-size: 2.5em;
      }
    }
  }
`;
