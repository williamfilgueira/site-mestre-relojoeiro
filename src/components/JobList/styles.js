import styled from "styled-components";

export const JobsContainer = styled.div`
  text-align: center;
  display: block;
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 50px;
    margin: 30px;
    -webkit-animation: spin 4s linear infinite;
    -moz-animation: spin 4s linear infinite;
    animation: spin 4s linear infinite;
    @-moz-keyframes spin {
      100% {
        -moz-transform: rotate(360deg);
      }
    }
    @-webkit-keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
`;

export const BoxListJob = styled.div`
  flex: 1 1 1400px;
  margin-top: 100px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3.5em;
  }
`;

export const JobList = styled.div`
  flex: 1 1 500px;
  text-align: center;
  div {
    margin-top: 20px;
    font-size: 3em;
    display: inline-block;

    ul {
      li {
        padding: 10px 40px 10px 5px;
      }
    }
  }
`;
