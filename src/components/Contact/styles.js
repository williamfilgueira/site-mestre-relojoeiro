import styled from "styled-components";

export const ContactContainer = styled.div`
  .container {
    margin-top: 150px;
    height: 400px;
  }
  .box-conteudo {
    font-size: 35px;
    height: 400px;
    background-color: #f4f1f1;
    .box-contato {
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #ffffff;

      .box-email {
        width: 40%;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          margin-right: 20px;
        }
      }
      .box-tel {
        display: flex;
        align-items: center;
        p {
          margin-right: 20px;
        }
      }
    }
  }
`;
