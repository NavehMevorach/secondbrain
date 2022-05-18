import * as gta from './../lib/ga/index'

function LastCta({ isFromHeader }) {
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
    <div id="why" className="pt-250 md-pt-200">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-11 m-auto">
            <div className="title-style-six text-center">
              <h2>
                {isFromHeader ? 'Why Not?' : 'Love Our Vision?'}
                <br /> <span>Join</span> Now.
              </h2>
            </div>

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
  )
}

export default LastCta
