import { ContactContainer } from "./styles";

function Contact() {
  return (
    <ContactContainer>
      <div className="container">
        <div className="box-conteudo">
          <div className="box-contato"></div>
          <div className="box-contato">
            <div className="box-titulo">
              <h2>Entre em Contato</h2>
            </div>
          </div>
          <div className="box-contato">
            <div className="box-email">
              <p>onezioquerino@gmail.com</p>
              <img
                src="/assets/icon-email.svg"
                alt="email de contato - onezioquerino@gmail.com"
              />
            </div>
          </div>
          <div className="box-contato">
            <div className="box-tel">
              <p alt="telefone:(21)21 9-76582013">(021)9-76582013</p>
              <img src="/assets/icon-whatsapp.svg" />
            </div>
          </div>
          <div className="box-contato"></div>
        </div>
      </div>
    </ContactContainer>
  );
}

export default Contact;
