function LastCta({ isFromHeader }) {
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
              <button className="demo-button">Join Beta</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LastCta
