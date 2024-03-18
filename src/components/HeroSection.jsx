export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Olá, Sou a Rayssa</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Especialista em expansão de</span>{" "}
              <br />
                Franquias
            </h1>
            <p className="hero--section-description">
            Em expansão de franquias tive a oportunidade de agregar conhecimentos em 
            Marketing Estratégico para Franqueadoras, prospecção outbound, 
            prospecção inbound, técnicas de pré-qualificação de candidatos 
            a investidores, além de conhecimentos sobre reuniões, fechamentos, elaboração de DRE's e Coffees.
            Ainda, atuei com os seguintes CRMS: RD Station, Kommo e Funil de Vendas.

            
              <br /> 
            </p>
          </div>
      
        </div>
        <div className="hero--section--img">
          <img src="./img/about-me.png" alt="Hero Section" />
        </div>
      </section>
    );
  }