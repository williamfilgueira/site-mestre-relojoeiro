import styled from "styled-components";

export const SpecialtiesContainer = styled.div`
  margin: 0;
  margin-top: 250px;

  .container {
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
  }
`;

export const BoxTitle = styled.div`
  flex: 1 1 auto;
  font-size: 3.5em;
  text-align: center;
`;

export const BoxImage = styled.div`
  flex: 1 1 250px;
  text-align: center;
  img {
    display: inline;

    padding: 20px;
    width: 250px;
    height: 250px;
  }
`;
