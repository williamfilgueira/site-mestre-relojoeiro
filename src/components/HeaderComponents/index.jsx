import { Header } from "./styles";

function HeaderComponent() {
  return (
    <Header>
      <div className="container">
        <div className="box-logo">
          <img
            src="/assets/MestreRelojoeiro.svg"
            alt="Logo mestre relojoeiro"
          />
          <a href="#">
            {" "}
            <h1>Mestre Relojoeiro</h1>
          </a>
        </div>
        <nav className="link-topo">
          <ul>
            <a href="#serviços">
              <li>Serviços</li>
            </a>
            <a href="#contato">
              <li>Contato</li>
            </a>
          </ul>
        </nav>
      </div>
    </Header>
  );
}

export default HeaderComponent;
