import React from 'react'
import { FiMapPin, FiServer } from 'react-icons/fi'
import { IoMdHourglass } from 'react-icons/io'
import { GiSpeedometer, GiEntryDoor, GiMagnifyingGlass } from 'react-icons/gi'
import { Link } from 'gatsby'
import ycslogo from '../assets/ycs-logo-square.png'
import calpoly from '../assets/Cal-poly-work-min.png'
import cplogo from '../assets/cp-logo-square.png'
import scootlogo from '../assets/sct-usa-logo-square.png'
import colonymedia from '../assets/colony-media-logo-square.png'
import lighthouse from '../assets/lighthouse-square.png'
const Work = () => (
  <div>
    <h1 className="fw5 f1-ns f2 fh-title tc">
      Websites crafted for <em>growth</em>
    </h1>
    <div class="dt-ns dt--fixed-ns">
      <div class="dtc-ns tc ph3">
        <span className="center">
          <GiSpeedometer className="w3 h3" />
        </span>
        <h2 className="f3 lh-title fw5 mt0">Speed</h2>
        <p className="lh-copy f5">
          Nobody should be losing their audience due to a slow website. All my
          sites prioritize an amazing user experience with fast, snappy,
          responsive user inputs.
        </p>
      </div>
      <div class="dtc-ns tc ph3">
        <GiEntryDoor className="w3 h3" />

        <h2 className="f3 lh-title fw5 mt0">Accessibility</h2>

        <p className="lh-copy f5">
          Built mobile-first to be responsive and functional on most devices.
          Websites will be tested for WCAG 2.0 compliance.
        </p>
      </div>
      <div class="dtc-ns tc ph3">
        <GiMagnifyingGlass className="w3 h3" />

        <h2 className="f3 lh-title fw5 mt0">Search Engines</h2>
        <p className="lh-copy f5">
          Search engine optimized from the ground up. Semantic html and rich
          snippet Schema.org markup means your website will be easily accessible
          to web crawlers.
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
  </div>
)

export default Work
