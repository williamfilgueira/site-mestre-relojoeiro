import { FooterContainer, BoxLogo, Copy } from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <BoxLogo>
          <img src="/assets/Mestre_Relojoeiro__1_-removebg-preview 3.svg" />
          <h2>Mestre Relojoeiro</h2>
          <div>
            <p>© 2021 Copyright</p>
          </div>
        </BoxLogo>
      </div>
    </FooterContainer>
  );
}

export default Footer;
