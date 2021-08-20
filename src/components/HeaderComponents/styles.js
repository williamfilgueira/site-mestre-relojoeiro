import styled from "styled-components";

export const Header = styled.header`
  .container {
    padding: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .box-logo {
      display: flex;
      align-items: center;
    }
    .box-logo a {
      margin-left: 20px;
      text-decoration: none;
      color: #555454;
      transition: 0.3s;
    }
    .box-logo a:hover {
      color: #d09d20;
    }
    .box-logo h1 {
      font-size: 45px;
    }
    .link-topo ul {
      display: flex;
      align-items: center;
    }
    .link-topo ul li {
      list-style: none;
    }
    .link-topo ul a {
      margin: 10px;
      text-transform: uppercase;
      text-decoration: none;
      font-size: 26px;
      color: #555454;
      transition: 0.3s;
    }
    .link-topo ul a:hover {
      transform: scale(1.2);
      color: #d09d20;
    }
  }
`;
