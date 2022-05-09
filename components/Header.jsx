import { useState, useEffect } from 'react'
import * as gta from './../lib/ga/index'
import Link from 'next/link'
import Scrollspy from 'react-scrollspy'

const Header = ({ setIsFromHeader }) => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const [navbar, setNavbar] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  }, [])

  function handleSignUp() {
    gta.event({
      action: 'sign_up',
      params: {
        category: 'new user',
        label: 'new user',
        value: 'new user',
      },
    })
  }
  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  return (
    <>
      <div
        className={
          navbar
            ? 'theme-main-menu sticky-menu theme-menu-five fixed'
            : 'theme-main-menu sticky-menu theme-menu-five'
        }>
        <div className="d-flex align-items-center justify-content-center">
          <div className="logo">
            <Link href="/">
              <a>
                <img src="/assets/img/logo.svg" alt="SecondBrain Logo" />
              </a>
            </Link>
          </div>

          <nav id="mega-menu-holder" className="navbar navbar-expand-lg">
            <div className="container nav-container">
              <div className="mob-header">
                <button className="toggler-menu" onClick={handleClick}>
                  <div className={click ? 'active' : ''}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </button>
              </div>

              <div
                className="navbar-collapse collapse landing-menu-onepage"
                id="navbarSupportedContent">
                <div className="d-lg-flex justify-content-between align-items-center">
                  <Scrollspy
                    className="navbar-nav  main-side-nav font-gordita"
                    items={['home', 'about', 'why']}
                    currentClassName="active"
                    offset={-90}>
                    <li className="nav-item">
                      <a href="#home" className="nav-link">
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#about" className="nav-link">
                        About
                      </a>
                    </li>
                    <li
                      onClick={() => setIsFromHeader(true)}
                      className="nav-item">
                      <a href="#why" className="nav-link">
                        Why
                      </a>
                    </li>
                  </Scrollspy>
                </div>
              </div>
            </div>
          </nav>
          <div className="right-widget">
            <a
              href="https://forms.gle/X9cRxoe3vPVtctc16"
              target="_blank"
              rel="noreferrer"
              className="demo-button"
              onClick={handleSignUp}>
              <span> Join Waitlist</span>
              {/* <img src="/assets/icons/plus.svg" alt="Plus Icon" /> */}
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Start */}
      <div className={click ? 'mobile-menu  menu-open' : 'mobile-menu'}>
        <div className="logo order-md-1">
          <Link href="/">
            <a>
              <img src="/assets/img/logo.svg" alt="SecondBrain Logo" />
            </a>
          </Link>
          <div className="fix-icon text-dark" onClick={handleClick}>
            <img src="/assets/icons/close.svg" alt="Close Icons" />
          </div>
        </div>

        <Scrollspy
          className="navbar-nav  "
          items={['home', 'about', 'why']}
          currentClassName="active"
          offset={-90}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={handleClick}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={handleClick}>
              About
            </a>
          </li>
          <li onClick={() => setIsFromHeader(true)} className="nav-item">
            <a href="#why" className="nav-link" onClick={handleClick}>
              Why
            </a>
          </li>
        </Scrollspy>
      </div>
    </>
  )
}

export default Header
