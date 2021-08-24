import styled from "styled-components";

export const SpecialtiesContainer = styled.div`
  .container {
    padding: 20px;
  }
  .box-conteudo {
    .box-title {
      display: flex;
      justify-content: center;
      font-size: 35px;
    }
    .box-img {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: stretch;
      align-items: center;
      img{
        margin: 10px;
      }
      @media (max-width: 1025px) {
        grid-template-columns: 1fr 1fr;
      }
    }
    .box-img img:nth-child(1n + 6) {
      height: 150px;
    }
    .box-img img:last-child {
      margin-top: 90px;
      
    }
  }
`;
