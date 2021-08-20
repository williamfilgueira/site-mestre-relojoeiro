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
      grid-template-rows: 1fr 1fr 1fr;
      justify-items: center;
      align-items: center;
    
    }
    .box-img img:nth-child(1n+6) {
        height: 150px;
    }
  }
`;
