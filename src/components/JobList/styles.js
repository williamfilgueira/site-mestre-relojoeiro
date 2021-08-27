import styled from "styled-components";

export const JobsContainer = styled.div`
  text-align: center;
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
  margin-top: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5em;
  div {
  }
`;

export const JobList = styled.div`
  flex: 1 1 auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  gap: 40px;
  ul {
    margin-top: 20px;
    font-size: 3em;
  }
`;
