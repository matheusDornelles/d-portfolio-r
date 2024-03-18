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
            Sou advogada, formada em Direito pela Universidade Católica de Pernambuco, mas trabalho com vendas há mais de 10 anos. Atualmente atuo com Expansão de Franquias há 02 anos, período em que tive clientes como a R9 Ronaldo Academy, Dentz, Chopperia Germânia, Mapa da Mina e a Via Direta.

            
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