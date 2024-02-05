export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Olá, Sou a Rayssa</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">BDR/SDR</span>{" "}
              <br />
                Closer
            </h1>
            <p className="hero--section-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              <br /> Dolorum, quas. Amet soluta assumenda cum?
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="./img/about-me.png" alt="Hero Section" />
        </div>
      </section>
    );
  }