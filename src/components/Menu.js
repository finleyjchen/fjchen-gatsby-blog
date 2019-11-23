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
      <header className="w-full ">
        <nav className="max-w-5xl mx-auto flex flex-wrap content-center flex-row text-left justify-between py-2 px-3 md:px-6 bg-white border-b items-center w-full">
          <div className="md:text-left mb-2 sm:mb-0 w-1/2">

          <Link
            to={'/'}
            className="text-lg md:text-2xl no-underline font-bold"
            >
            Finley Chen
            <span className="block text-sm font-medium">Frontend Web Developer<em></em></span>
          </Link>
            </div>
            <a
            href="#"
            id="menu-btn"
            onClick={this.menuToggle}
            className=" sm:hidden w-1/2"
          >
            {this.state.menuOpen ? (
              <IoMdMenu size="2em" className="ml-auto mr-0" />
            ) : (
              <IoMdMenu size="2em"  className="ml-auto mr-0" />
            )}
          </a>

          <ul
            id="menu"
            className={`text-right font-light sm:block sm:mb-0 self-center text-lg w-full sm:w-auto ${
              this.state.menuOpen ? 'block' : 'hidden'
            } `}
          >
            <li className=" md:inline-block md:mx-4">
              <Link
                className="block border-t border-gray-400 md:border-0 py-4"
                to={'/about'}
                activeClassName="font-bold"
              >
                About
              </Link>
            </li>
            <li className=" md:inline-block md:mx-4">
              <Link
                className="block border-t border-gray-400 md:border-0 py-4"
                to={'/work'}
                activeClassName="font-bold"
              >
                Work
              </Link>
            </li>
            <li className=" md:inline-block md:mx-4">
              <Link
                className="block block border-t border-gray-400 md:border-0 py-4"
                to={'/writing'}
                activeClassName="font-bold"
              >
                Writing
              </Link>
            </li>
            <li className=" md:inline-block md:mx-4">
              <Link
                to={'/contact'}
                activeClassName="font-bold"
                className="block border-t border-gray-400 md:border-0 py-4"
              >
                Contact Me
              </Link>
            </li>
            {/* <a href="#" className="link" onClick={this.randomColorClick}>
            <IoMdMenu />
          </a> */}
          </ul>

        </nav>
      </header>
    )
  }
}
export default Menu
