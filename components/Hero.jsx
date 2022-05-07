function Hero() {
  return (
    <div className="client-feedback-slider-five mt-200 md-mt-10" id="home">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-10 col-md-9 m-auto">
            <div className="title-style-six text-center mt-25">
              <h1>Learning alone is your yesterday's problem.</h1>

              <p>
                SecondBrain is an online learning framework. We offer a
                group-based learning experience that helps you stay motivated,
                productive, focused, and overcome the tutorial hell.
              </p>
              <div className="form-input-updated">
                <a
                  href="https://forms.gle/X9cRxoe3vPVtctc16"
                  target="_blank"
                  rel="noopener"
                  className="demo-button">
                  Join Beta
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Bg alt="dots bg" className="hero-bg" /> */}
      <img alt="dots bg" className="hero-bg" src="/assets/img/bgHero.svg" />
    </div>
  )
}

export default Hero
