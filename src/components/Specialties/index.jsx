import { SpecialtiesContainer, BoxTitle, BoxImage } from "./styles";

function Specialties() {
  return (
    <SpecialtiesContainer>
      <div className="container">
        <BoxTitle>
          <h2>Especialidades</h2>
        </BoxTitle>
        <BoxImage>
          <img src="/assets/X_Games_logo_logotipo 2.svg" alt="logo X-game" />
          <img src="/assets/seiko 1.svg" alt="logo seiko" />
          <img src="/assets/cartier 1.svg" alt="logo cartier" />
          <img src="/assets/icon-icon-logo-omega 1.svg" alt="logo omega" />
          <img src="/assets/orient 1.svg" alt="logo orient" />
          <img
            src="/assets/patek-philippe-logo 1.svg"
            alt="patek-philippe-logo"
          />
          <img src="/assets/rolex 1.svg" alt="logo rolex" />
          <img src="/assets/casio 1.svg" alt="logo casio" />
          <img src="/assets/tecnhos 1.svg" alt="logo tecnhos" />
        </BoxImage>
      </div>
    </SpecialtiesContainer>
  );
}

export default Specialties;
