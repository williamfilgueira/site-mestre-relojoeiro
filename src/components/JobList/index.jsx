import { JobsContainer, BoxListJob, JobList } from "./styles";

function Jobs() {
  return (
    <JobsContainer>
      <div className="container">
        <BoxListJob>
          <div>
            <img src="/assets/engrenagem.svg" />
            <h2>Tipos de serviços</h2>
            <img src="/assets/engrenagem.svg" />
          </div>
        </BoxListJob>
        <JobList>
          <div >
            <ul>
              <li>Revisões em Carrilhões</li>
              <li> Revisões em Relógios automáticos</li>
              <li> Revisões em Relógios Quartz</li>
              <li> Revisões em Relógios Cronógrafos</li>
            </ul>
          </div>
          <div >
            <ul>
              <li> Troca de vidros com vedação*</li>
              <li> Regulagem em relógios automáticos</li>
              <li> Trocas de baterias</li>
              <li> Entre outros</li>
            </ul>
          </div>
        </JobList>
      </div>
    </JobsContainer>
  );
}

export default Jobs;
