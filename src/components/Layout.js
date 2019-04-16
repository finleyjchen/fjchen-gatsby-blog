import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import axios from 'axios'
import { IoIosHeart, IoMdColorPalette } from 'react-icons/io'
class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      didMount: false,
      colors: [],
      divStyle: {
        color: '#333',
        backgroundColor: '#fff',
      },
    }

    // this.randomColorClick = this.randomColorClick.bind(this)
  }
  componentDidMount() {
    // fetch('randoma11y.com/combos/active')
    //   .then(response => response.json())
    //   .then(colors => this.setState({ colors }))
    setTimeout(() => {
      this.setState({ didMount: true })
    }, 0)
    // axios
    //   .get('https://randoma11y.com/combos')
    //   .then(response => {
    //     // create an array of contacts only with relevant data
    //     console.log(response)
    //     const newColors = response.data.map(c => {
    //       return {
    //         color_one: c.color_one,
    //         color_two: c.color_two,
    //       }
    //     })

    //     // create a new "State" object without mutating
    //     // the original State object.
    //     const newState = Object.assign({}, this.state, {
    //       colors: newColors,
    //     })

    //     // store the new state object in the component's state
    //     this.setState(newState)
    //   })
    //   .catch(error => console.log(error))
  }

  componentWillUnmount() {
    clearTimeout()
  }

  randomColorClick(e) {
    e.preventDefault()
    const newColor = this.state.colors
    const random = Math.floor(Math.random() * 49)
    console.log(newColor[Object.keys(newColor)[random]].color_one)
    this.setState({
      divStyle: {
        ...this.state.divStyle,
        color: newColor[Object.keys(newColor)[random]].color_one,
        backgroundColor: newColor[Object.keys(newColor)[random]].color_two,
      },
    })
  }

  render() {
    const { didMount } = this.state

    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    header = (
      <nav className="db dt-ns center w-100 border-box pv3-ns">
        <Link
          to={'/'}
          className="db dtc-ns b v-mid link dim w-100 w-30-ns tc tl-ns mb2 mb0-ns f3"
        >
          Finley Chen
        </Link>
        <div className="db dtc-ns v-mid w-100 w-60-ns tc tr-ns">
          <Link className="link dim f5 f4-ns dib mr3 mr4-ns" to={'/about'}>
            about
          </Link>
          <Link className="link dim f5 f4-ns dib mr3 mr4-ns" to={'/work'}>
            work
          </Link>
          {/* <a href="#" className="link" onClick={this.randomColorClick}>
            <IoMdColorPalette />
          </a> */}
        </div>
      </nav>
    )

    return (
      <div className="wrap" style={this.state.divStyle}>
        <div className="mw7 center pa3 pa0-l">
          <div className="nav">{header}</div>
          <div className={`fade-in ${didMount && 'visible'}`}>{children}</div>
          <div className="footer mv4 cf">
            <small className="db mb2 fl-ns">&copy; Finley Chen</small>

            <small className="db fr-ns">
              Crafted with <a href="https://www.gatsbyjs.org/">Gatsby</a> and{' '}
              <a href="http://tachyons.io">Tachyons</a> with <IoIosHeart /> in
              San Luis Obispo
            </small>
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
