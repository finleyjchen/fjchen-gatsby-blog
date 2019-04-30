import React from 'react'
import { FiMapPin, FiServer } from 'react-icons/fi'
import { IoMdHourglass } from 'react-icons/io'
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
      <div class="dtc-ns tc pv4">
        <h2 className="f2 lh-title fw5">Speed</h2>
        <p className="lh-copy f4">
          Nobody should be losing their audience due to a slow website. All my
          sites prioritize an amazing user experience with fast, snappy,
          responsive user inputs.
        </p>
      </div>
      <div class="dtc-ns tc pv4">
        <h2 className="f2 lh-title fw5">Accessibility</h2>
        <p className="lh-copy f4">
          Built mobile-first to be responsive and functional on most devices.
          Websites will be tested for WCAG 2.0 compliance.
        </p>
      </div>
      <div class="dtc-ns tc pv4">
        <h2 className="f2 lh-title fw5">Search Engines</h2>
        <p className="lh-copy f4">
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
        <Link
          to="/work/sct-usa"
          className="no-underline  grayscale shadow-hover bg-near-white hover-bg-white  flex items-center pa1 "
        >
          <img className="w3 h3 w4-ns h4-ns" src={colonymedia} alt="" />

          <div className="pl3 flex-auto">
            <span className="f4 f3-ns mb2 db">Colony Media</span>
            <span className="f6 f5-ns fw4 dark-gray mt0 ">
              Web Development, eCommerce
            </span>
          </div>
        </Link>
      </div>
      <div className="pa1 w-100 pa3-ns w-50-ns fl">
        <Link
          to="/work/sct-usa"
          className="no-underline  grayscale shadow-hover bg-near-white hover-bg-white  flex items-center pa1 "
        >
          <img className="w3 h3 w4-ns h4-ns" src={scootlogo} alt="" />

          <div className="pl3 flex-auto">
            <span className="f4 f3-ns mb2 db">SCT USA</span>
            <span className="f6 f5-ns fw4 dark-gray mt0 ">
              Web Development, eCommerce
            </span>
          </div>
        </Link>
      </div>
      <div className="pa1 w-100 pa3-ns w-50-ns fl">
        <Link
          to="/work/lighthouse"
          className="no-underline  grayscale shadow-hover bg-near-white hover-bg-white  flex items-center pa1 "
        >
          <img className="w3 h3 w4-ns h4-ns" src={lighthouse} alt="" />

          <div className="pl3 flex-auto">
            <span className="f4 f3-ns mb2 db ">Lighthouse Atascadero</span>
            <span className="f6 f5-ns fw4 dark-gray mt0 ">
              Web Development, Migration, eCommerce
            </span>
          </div>
        </Link>
      </div>
    </div>

    <div className="post">
      <h4>
        <a href="https://calpoly.edu" className="post-link">
          California Polytechnic University
        </a>
      </h4>
      <p className="f6 lh-copy ma0">
        <FiMapPin /> San Luis Obispo, CA
      </p>
      <p className="f6 lh-copy ma0">
        <IoMdHourglass />
        January 2019 – Present
      </p>

      <p>
        Student assistant frontend web developer for Cal Poly's Administration &
        Finance Department.
      </p>
    </div>
    <div className="post">
      <h4>
        <a href="https://colonymedia.us" className="post-link">
          Colony Media
        </a>
      </h4>
      <p className="f6 lh-copy ma0">
        <FiMapPin /> San Luis Obispo, CA
      </p>
      <p className="f6 lh-copy ma0">
        <IoMdHourglass />
        May 2018 – Present
      </p>

      <p>
        Completing WordPress website work contracts, maintenance and server
        management for 10+ websites.
      </p>
    </div>

    <div className="post">
      <h4>
        <span className="post-link">Freelance web developer</span>
      </h4>
      <p className="f6 lh-copy ma0">
        <FiMapPin /> Remote
      </p>
      <p className="f6 lh-copy ma0">
        <IoMdHourglass />
        January 2017 – Present
      </p>
      <p>
        Creating pure HTML/CSS/JS websites, WordPress websites (vanilla
        WordPress and Genesis Framework), custom child theme development, and
        custom WordPress plugin development. Also doing SEO work to increase
        websites’ online web presence.
      </p>
    </div>
  </div>
)

export default Work
