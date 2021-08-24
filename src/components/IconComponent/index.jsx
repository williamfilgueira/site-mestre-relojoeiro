import { IconContainer, BoxIcons } from "./styles";

function IconComponent() {
  return (
    <IconContainer>
      <div className="container">
        <BoxIcons>
          <img src="/assets/timer.svg" />
          <p>
            Restaure seu tão amado relógio, não deixei que seus sonhos acabem
            com o tempo
          </p>
        </BoxIcons>
        <BoxIcons>
          <img src="/assets/alarm-check.svg" />
          <p>Confiança e credibilidade no estado do Rio de Janeiro</p>
        </BoxIcons>
        <BoxIcons>
          <img src="/assets/Vector.svg" />
          <p>
            Estamos no mercado à mais de 40 anos realizando reparos nos mais
            deversos segmentos da alta relojoaria
          </p>
        </BoxIcons>
      </div>
    </IconContainer>
  );
}

export default IconComponent;
