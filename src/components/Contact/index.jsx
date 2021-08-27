import { ContactContainer, BoxContact } from "./styles";

function Contact() {
  return (
    <ContactContainer>
      <div className="container">
        <BoxContact>
          <div></div>
          <div>
            <h2>Entre em Contato</h2>
          </div>
          <div className="contact">
            <p>onezioquerino@gmail.com</p>
            <img
              src="/assets/icon-email.svg"
              alt="email de contato - onezioquerino@gmail.com"
            />
          </div>
          <div className="contact">
            <p alt="telefone:(21)21 9-76582013">(021)9-76582013</p>
            <img src="/assets/icon-whatsapp.svg" />
          </div>
          <div></div>
        </BoxContact>
      </div>
    </ContactContainer>
  );
}

export default Contact;
