import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { GiSpeedometer, GiEntryDoor, GiMagnifyingGlass } from 'react-icons/gi'
import ycslogo from '../assets/ycs-logo-square.png'
import cplogo from '../assets/cp-logo-square.png'
import scootlogo from '../assets/sct-usa-logo-square.png'
import colonymedia from '../assets/colony-media-logo-square.png'
import lighthouse from '../assets/lighthouse-square.png'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import '../assets/index.css'
class WorkPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const siteTitle = 'Work'
    const siteDescription =
      'Functional, fast, and search optimized WordPress websites built for growth.'

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={'Finley Chen - ' + siteTitle}
        />
        <div className="measure-wide center tc mb2">

        <h1 className="fw5 f1-ns f2 fh-title tc">
          Websites crafted for <em>growth</em>
        </h1>

        <p className="lh-copy mb5 o-80">I’m a freelance web developer who specializes in WordPress and Woocommerce. Hire me to create functional, fast and responsive websites optimized for search engines.</p>
        </div>
        <div className="center measure-wide">
          <div className="ph3">

            <h2 className="f3 lh-title fw5 mv0">Speed</h2>
            <p className="lh-copy f5">
              Nobody should be losing their audience due to a slow website. All
              my sites prioritize an amazing user experience with fast, snappy,
              responsive user inputs.
            </p>
          </div>
          <div className="ph3">
   

            <h2 className="f3 lh-title fw5 mv0">Accessibility</h2>

            <p className="lh-copy f5">
              Built mobile-first to be responsive and functional on most
              devices. Websites will be tested for WCAG 2.0 compliance.
            </p>
          </div>
          <div className="ph3">

            <h2 className="f3 lh-title fw5 mv0">Search Engines</h2>
            <p className="lh-copy f5">
              Search engine optimized from the ground up. Semantic html and rich
              snippet Schema.org markup means your website will be easily
              accessible to web crawlers.
            </p>
          </div>
        </div>

        <h1 className="fw5 f1-ns f2 fh-title tc">Portfolio</h1>
        <div className="cf ">
          <div className="pa1 w-100 pa3-ns w-100-ns fl">
            <Link
              to="/work/your-christmas-store"
              className="no-underline  grayscale shadow-hover bg-near-white hover-bg-white  flex items-center pa1 "
            >
              <img className="w3 h3 w5-ns h5-ns" src={ycslogo} alt="" />

              <div className="pl3 flex-auto">
                <span className="f3 f3-ns mb2 db ">Your Christmas Store</span>
                <span className="f6 f5-ns fw4 dark-gray mt0 ">
                  Web Development, Migration, eCommerce
                </span>
              </div>
            </Link>
          </div>
          <div className="pa1 w-100 pa3-ns w-50-ns fl">
            <Link
              to="/work/cal-poly"
              className="no-underline  grayscale shadow-hover bg-near-white hover-bg-white  flex items-center pa1 "
            >
              <img className="w3 h3 w4-ns h4-ns" src={cplogo} alt="" />


              <div className="pl3 flex-auto">
                <span className="f4 f3-ns mb2 db">Cal Poly</span>
                <span className="f6 f5-ns fw4 dark-gray mt0 ">
                  Student Front End Web Developer
                </span>
              </div>
            </Link>
          </div>
          <div className="pa1 w-100 pa3-ns w-50-ns fl">
            <a
              href="https://colonymedia.us"
              className="no-underline  grayscale shadow-hover bg-near-white hover-bg-white  flex items-center pa1 "
            >
              {/* <Link
          to="/work/sct-usa"
          className="no-underline  grayscale shadow-hover bg-near-white hover-bg-white  flex items-center pa1 "
        > */}
              <img className="w3 h3 w4-ns h4-ns" src={colonymedia} alt="" />

              <div className="pl3 flex-auto">
                <span className="f4 f3-ns mb2 db">Colony Media</span>
                <span className="f6 f5-ns fw4 dark-gray mt0 ">
                  Contract, Freelance, WordPress
                </span>
              </div>
            </a>
            {/* </Link> */}
          </div>
          <div className="pa1 w-100 pa3-ns w-50-ns fl">
            <a
              href="https://sctusa.com"
              className="no-underline  grayscale shadow-hover bg-near-white hover-bg-white  flex items-center pa1 "
            >
              {/* <Link
          to="/work/sct-usa"
          className="no-underline  grayscale shadow-hover bg-near-white hover-bg-white  flex items-center pa1 "
        > */}
              <img className="w3 h3 w4-ns h4-ns" src={scootlogo} alt="" />

              <div className="pl3 flex-auto">
                <span className="f4 f3-ns mb2 db">SCT USA</span>
                <span className="f6 f5-ns fw4 dark-gray mt0 ">
                  Web Development, eCommerce
                </span>
              </div>
            </a>
            {/* </Link> */}
          </div>
          <div className="pa1 w-100 pa3-ns w-50-ns fl">
            <a
              href="https://lighthouseatascadero.org"
              className="no-underline  grayscale shadow-hover bg-near-white hover-bg-white  flex items-center pa1 "
            >
              {/* <Link 
          to="/work/lighthouse" className="no-underline grayscale shadow-hover
          bg-near-white hover-bg-white flex items-center pa1 " >
          */}
              <img className="w3 h3 w4-ns h4-ns" src={lighthouse} alt="" />
              <div className="pl3 flex-auto">
                <span className="f4 f3-ns mb2 db ">Lighthouse Atascadero</span>
                <span className="f6 f5-ns fw4 dark-gray mt0 ">
                  Web Development, Migration, eCommerce
                </span>
              </div>
            </a>
            {/* </Link> */}
          </div>
        </div>
      </Layout>
    )
  }
}

export default WorkPage
