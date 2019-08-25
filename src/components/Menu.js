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
        <nav className="fixed static-ns dt top-0 w-100 center border-box pv3 ph3 ph5-l shadow-2-s z-max bb b--black-10 topography">
          <Link
            to={'/'}
            className="dtc w3 b v-mid near-black outline ph3 link dim f3 logo  buttonOverlay"
          >
            FC
          </Link>
          <ul
            id="menu"
            className={`pl0 static-ns absolute mt5 mt0-ns ${
              this.state.menuOpen ? 'menuIsOpen' : 'menuClosed'
            } db dtc-ns v-mid tr w-40 w-100-ns z-max list`}
          >
            <li className="db dib-ns">
              <Link
                className="pa3 link dim dark-gray f3 f5-ns mr4-ns bb-hover db tr"
                to={'/about'}
                activeClassName="o-80 bg-near-black white"
              >
                About
              </Link>
            </li>
            <li className="db dib-ns">
              <Link
                className="pa3 link dim dark-gray f3 f5-ns mr4-ns bb-hover db tr"
                to={'/work'}
                activeClassName="o-80 bg-near-black white"
              >
                Work
              </Link>
            </li>
            <li className="db dib-ns">
              <Link
                className="pa3 link dim dark-gray f3 f5-ns mr4-ns bb-hover db tr"
                to={'/writing'}
                activeClassName="o-80 bg-near-black white"
              >
                Writing
              </Link>
            </li>
            <li className="db dib-ns">
              <Link
                to={'/contact'}
                activeClassName="o-80 bg-near-black white"
                className="pa3 link dim dark-gray f3 f5-ns mr4-ns bb-hover db tr"
              >
                Contact Me
              </Link>
            </li>
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
