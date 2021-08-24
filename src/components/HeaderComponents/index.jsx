import { Header, BoxLogo, Nav } from "./styles";

function HeaderComponent() {
  return (
    <Header>
      <div className="container">
        <BoxLogo>
          <a href="#">
            <img
              src="/assets/MestreRelojoeiro.svg"
              alt="Logo mestre relojoeiro"
            />
            <h3>Mestre Relojoeiro</h3>
          </a>
        </BoxLogo>
        <Nav>
          <ul>
            <li>
              <a href="#serviços">Serviços</a>
            </li>
            <li>
              <a href="#contato">Contato</a>
            </li>
          </ul>
        </Nav>
      </div>
    </Header>
  );
}

export default HeaderComponent;
