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
          <div className="col-xl-8 col-lg-10 col-md-9 m-auto">
            <div className="title-style-six text-center mt-25">
              {/* <h1>Learning alone is your yesterday&apos;s problem.</h1> */}
              <h1>Chat, Learn, Collab - Get Hired.</h1>

              {/* <p>
                SecondBrain is an online learning framework. We offer a
                group-based learning experience that helps you stay motivated,
                productive, focused, and overcome the tutorial hell.
              </p> */}
              <p>
                Join our free, group-based learning suite. An industry-oriented
                learning environment that helps you stay motivated, deepen your
                understanding & knowledge, and reach your career goals.
              </p>
              <div className="form-input-updated">
                <a
                  href="https://forms.gle/PSzQwVWMXX66MLFcA"
                  target="_blank"
                  rel="noreferrer"
                  className="demo-button"
                  onClick={join}>
                  Request Access
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
