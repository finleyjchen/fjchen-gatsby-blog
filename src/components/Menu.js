import React, { useState, Fragment } from 'react'
import { Link } from 'gatsby'
import { IoMdMenu } from 'react-icons/io'
class Menu extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      menuOpen: false,
    }
    this.menuToggle = this.menuToggle.bind(this)
    // this.randomColorClick = this.randomColorClick.bind(this)
  }

  menuToggle(e) {
    e.preventDefault()
    if (this.state.menuOpen) {
      this.setState({
        menuOpen: false,
      })
    } else {
      this.setState({
        menuOpen: true,
      })
    }
  }
  render() {
    return (
      <Fragment>
        <nav className="fixed static-ns dt top-0 w-100 center border-box pv3 ph3 ph0-l bg-white shadow-2-s">
          <Link
            to={'/'}
            className="dtc b v-mid link dim w-40  tl mb2 mb0-ns f3"
          >
            Finley Chen
          </Link>
          <ul
            id="menu"
            className={`pl0 static-ns absolute mt5 mt0-ns ${
              this.state.menuOpen ? 'menuIsOpen' : 'menuClosed'
            } db dtc-ns v-mid w-50 w-100-ns w-75-ns h-80 tr  bg-white z-max`}
          >
            <Link
              className="pa2 link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr3 mr4-ns bb-hover"
              to={'/work'}
              activeClassName="bb-ns b--black-50 bw1"
            >
              Work
            </Link>
            <Link
              className="pa2 link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr3 mr4-ns bb-hover"
              to={'/writing'}
              activeClassName="bb-ns b--black-50 bw1"
            >
              Writing
            </Link>
            <Link
              className="pa2 link dim dark-gray tr tl-ns f3 f5-ns db dib-ns mr3 mr4-ns bb-hover"
              to={'/about'}
              activeClassName="bb-ns b--black-50 bw1"
            >
              About
            </Link>
            <Link
              to={'/contact'}
              activeClassName="bb-ns b--black-50 bw1"
              className="db mw5 tc center mt2 mt0-ns dib-ns f f5-ns link ba bw1  pa2  bg-black bg-animate white b--near-black hover-bg-white hover-near-black "
            >
              Contact Me
            </Link>
            {/* <a href="#" className="link" onClick={this.randomColorClick}>
            <IoMdMenu />
          </a> */}
          </ul>
          <a
            href="#"
            id="menu-btn"
            onClick={this.menuToggle}
            className="dtc tr v-mid dn-ns w-third pr2 p0-ns link dim dark-gray"
          >
            {this.state.menuOpen ? (
              <IoMdMenu size="2em" className="dim" />
            ) : (
              <IoMdMenu size="2em" />
            )}
          </a>
        </nav>
      </Fragment>
    )
  }
}
export default Menu
