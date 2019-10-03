import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import axios from 'axios'
import { IoMdMenu, IoMdGlasses } from 'react-icons/io'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Fade from 'react-reveal/Fade'
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

    header = <Menu />

    return (
      <div className="">

      <div className="wrap" style={this.state.divStyle}>
          {header}
          <Fade>
          <main
            className={`  container mx-auto p-3 md:p-6 `}
              >
            {children}
          </main>
          <Footer />
          </Fade>
      </div>
              </div>
    )
  }
}

export default Layout
