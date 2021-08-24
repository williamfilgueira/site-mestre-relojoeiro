import styled from "styled-components";

export const InfoRelojoeiro = styled.div`
  margin-top: 100px;
  background-color: #f4f1f1;
  .container {
    padding: 20px;
    font-size: 3em;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
    gap: 20px;
  }
`;

export const BoxRelojoeiro = styled.div`
  flex: 1 1 300px ;
  `;

export const BoxFotoRelojoeiro = styled.div`
    flex: 1 1 300px ;
  img {
    padding: 3px;
    width: 375px;
    border-radius: 10px;
    box-shadow: 1px 1px 6px black;
    /* flex: 1 1 500px ; */
    /* width: 500px; */
    /* height: 50rem; */
  }
`;
