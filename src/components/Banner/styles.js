import styled from "styled-components";

export const BannerSection = styled.section`
  background-color: black;
  background-position: center;
  background-image: url("/assets/fundoHeader.svg");
  background-repeat: no-repeat;
  background-size: auto auto; 
  
  .container  {
    height: 320px;
    font-size: 4em;
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
