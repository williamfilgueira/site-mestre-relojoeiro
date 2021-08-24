import { InfoRelojoeiro, BoxRelojoeiro, BoxFotoRelojoeiro } from "./styles";

function Info() {
  return (
    <InfoRelojoeiro>
      <div className="container">
        <BoxRelojoeiro>
          <h2>O relojoeiro</h2>
          <p alt="Texto opnião do relojoeiro">
            “Uma profissão passada de pai para filho, estou no mercado desde os
            meus 10 anos de idade, realizando todos os tipos de reparos dos mais
            antigos aos mais novos modelos, minha maior satisfação é poder ver a
            felicidade do cliente ao poder reviver seu tão amado relógio mais
            uma vez ”
          </p>
        </BoxRelojoeiro>
        <BoxFotoRelojoeiro>
          <img
            src="/assets/onezio.svg"
            alt="foto perfil do relojoeiro com relogio pedestal"
          />
        </BoxFotoRelojoeiro>
      </div>
    </InfoRelojoeiro>
  );
}

export default Info;
