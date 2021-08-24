import styled from "styled-components";

export const JobsContainer = styled.div`
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

  .container {
    height: 800px;
    /* display: flex;
    justify-content: center;
    padding: 50px; */
    .box-list-job {
    }
    .title-list {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 150px;
      margin-bottom: 50px;

      font-size: 40px;
      img {
        height: 100px;
        margin: 30px;
        -webkit-animation: spin 4s linear infinite;
        -moz-animation: spin 4s linear infinite;
        animation: spin 4s linear infinite;
      }
    }
    .job-list {
      display: flex;
      font-size: 35px;
      width: 100%;
      ul {
        width: 100%;
        margin-left: 150px;
        padding: 0;
        li {
          padding: 10px;
        }
      }
    }
  }
`;
