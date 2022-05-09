import * as gta from './../lib/ga/index'

function Hero() {
  function join() {
    gta.event({
      action: 'sign_up',
      params: {
        category: 'new user',
        label: 'new user',
        value: 'new user',
      },
    })
  }
  return (
    <div className="client-feedback-slider-five mt-200 md-mt-10" id="home">
      <div className="container">
        <div className="row">
          <div className="col-xl-7 col-lg-10 col-md-9 m-auto">
            <div className="title-style-six text-center mt-25">
              <h1>Learning alone is your yesterday&apos;s problem.</h1>

              <p>
                SecondBrain is an online learning framework. We offer a
                group-based learning experience that helps you stay motivated,
                productive, focused, and overcome the tutorial hell.
              </p>
              <div className="form-input-updated">
                <a
                  href="https://forms.gle/X9cRxoe3vPVtctc16"
                  target="_blank"
                  rel="noreferrer"
                  className="demo-button"
                  onClick={join}>
                  Join Waitlist
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
