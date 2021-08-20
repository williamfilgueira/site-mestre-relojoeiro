import styled from "styled-components";

export const BannerSection = styled.section`
  height: 353px;
  background-color: black;
  background-image: url("/assets/fundoHeader.svg");
  background-repeat: no-repeat;
  background-size: cover; 
  
  .container  {
    padding: 20px;
    height: 353px;
    font-size: 40px;
    text-align: center;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container h2{
    text-shadow: 3px 2px 3px  #d09d20;

  }
`;
