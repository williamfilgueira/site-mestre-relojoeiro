import styled from "styled-components";

export const ContactContainer = styled.div`
  background: #f4f1f1;
  margin-top: 150px;
  padding: 10px;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.9em;
  }
`;

export const BoxContact = styled.div`
  display: flex;
  flex-flow: column wrap;
  padding: 50px 0 50px 0;
  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
