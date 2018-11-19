import React from 'react'
import { Link } from 'gatsby'


class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.state = { didMount: false }

  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ didMount: true })
    }, 0)
  }
  render() {
    const { didMount } = this.state

    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <div>
          <span
            className="logo"
          >
            <Link

              to={'/'}
            >
              {title}
            </Link>

          </span>
          <span className="links float-right">
            <Link

              to={'/about'}
            >
              about
            </Link>
            <Link

              to={'/work'}
            >
              work
            </Link>
          </span>
        </div>
      )
    } else {
      header = (
        <div>
          <span
            className="logo"
          >
            <Link

              to={'/'}
            >
              {title}
            </Link>

          </span>
          <span className="links float-right">
            <Link

              to={'/about'}
            >
              about
            </Link>
            <Link

              to={'/work'}
            >
              work
</Link>
          </span>
        </div>
      )
    }
    return (
      <div
      >
        <div className="nav">

          {header}
        </div>
        <div className={`fade-in ${didMount && 'visible'}`}
        >
          {children}
        </div>
        <div className="footer">
          <small><a href="mailto:finleyjchen@gmail.com">Contact me</a> | Created with <a href="https://www.gatsbyjs.org/">Gatsby</a></small>
        </div>
      </div>
    )
  }
}

export default Layout
