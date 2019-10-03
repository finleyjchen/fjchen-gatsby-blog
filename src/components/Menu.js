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
      <header className="w-full bg-gray-800 border-pink-200 border-b-2">
        <nav className=" bg-gray-800 container mx-auto flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-3 md:px-6 bg-white shadow sm:items-baseline w-full">
          <div className="text-center md:text-left mb-2 sm:mb-0 inner">

          <Link
            to={'/'}
            className=" text-2xl no-underline hover:text-blue-dark text-blue-200 hover:text-white font-bold"
            >
            Finley Chen
            <span className="block text-sm font-medium">Frontend Web Developer<em></em></span>
          </Link>
            </div>
          <ul
            id="menu"
            className={`sm:mb-0 self-center text-lg ${
              this.state.menuOpen ? 'menuIsOpen' : 'menuClosed'
            } `}
          >
            <li className="inline-block mt-1 mr-3 md:mt-4 md:mr-4 lg:inline-block lg:mt-0">
              <Link
                className="text-pink-200 hover:text-white"
                to={'/about'}
                activeClassName="font-bold text-white"
              >
                About
              </Link>
            </li>
            <li className="inline-block mt-1 mr-3 md:mt-4 md:mr-4 lg:inline-block lg:mt-0">
              <Link
                className="text-pink-200 hover:text-white"
                to={'/work'}
                activeClassName="font-bold text-white"
              >
                Work
              </Link>
            </li>
            <li className="inline-block mt-1 mr-3 md:mt-4 md:mr-4 lg:inline-block lg:mt-0">
              <Link
                className="text-pink-200 hover:text-white"
                to={'/writing'}
                activeClassName="font-bold text-white"
              >
                Writing
              </Link>
            </li>
            <li className="inline-block mt-1 mr-3 md:mt-4 md:mr-4 lg:inline-block lg:mt-0">
              <Link
                to={'/contact'}
                activeClassName="font-bold text-white"
                className="text-pink-200 hover:text-white"
              >
                Contact Me
              </Link>
            </li>
            {/* <a href="#" className="link" onClick={this.randomColorClick}>
            <IoMdMenu />
          </a> */}
          </ul>
          {/* <a
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
          </a> */}
        </nav>
      </header>
    )
  }
}
export default Menu
