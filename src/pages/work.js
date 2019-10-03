import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { GiSpeedometer, GiEntryDoor, GiMagnifyingGlass } from 'react-icons/gi'
import ycslogo from '../assets/ycs-logo-square.png'
import CPLogo from '../assets/svg/cplogo.svg'
import scootlogo from '../assets/sct-usa-logo-square.png'
import colonymedia from '../assets/colony-media-logo-square.png'
import lighthouse from '../assets/images/lighthouse-atascadero.png'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Fade from 'react-reveal/Fade'

import '../assets/index.css'
import { cpus } from 'os'
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

        <h1 className="text-2xl md:text-6xl font-bold my-10 md:my-20">
          Websites crafted for growth
        </h1>


        <p className="text-lg md:text-3xl max-w-2xl">I’m a freelance web developer who specializes in WordPress, WooCommerce and Shopify. </p>


<div className="p-5 md:p-20"></div>
            <div className="flex flex-col md:flex-row items-center">

            <div className="md:w-1/3">

            <h2 className="text-lg mb-1">Static Websites</h2>
            <p className="lh-copy f5">
              Nobody should be losing their audience due to a slow website. All
              my sites prioritize an amazing user experience with fast, snappy,
              responsive user inputs.
            </p>
            <h2 className="text-lg mb-1">Search Engines</h2>
            <p className="lh-copy f5">
              Search engine optimized from the ground up. Semantic html and rich
              snippet Schema.org markup means your website will be easily
              accessible to web crawlers.
            </p>
            </div>
   
            <div className="md:w-1/3">

            <h2 className="text-lg mb-1">Speed &amp; Accessibility</h2>
            <p>
            Nobody should be losing their audience due to a slow website. All
              my sites prioritize an amazing user experience with fast, snappy,
              responsive user inputs.
            </p>
            <p className="lh-copy f5">
              Built mobile-first to be responsive and functional on most
              devices. Websites will be tested for WCAG 2.0 compliance.
            </p>
            </div>
            <div className="md:w-1/3">
              <Link
                to="/contact"
                className="mx-5 px-5 py-3 border-gray-800 border-2 bg-gray-800 text-pink-200 hover:text-pink-300 hover:bg-gray-700 text-xl md:text-2xl shadow-md hover:shadow-lg rise block max-w-xs" >
                  Get in touch with me &rarr;
                </Link>
            </div>
            </div>

        <h2 className="text-center sm:text-left font-bold text-md md:text-2xl my-10">Some examples of my work</h2>

          <div className="">
        <div className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 mx-10 md:w-1/4 sm:mx-0 px-2 rise mb-5">
            <Link
              to="/work/your-christmas-store"
              className="block shadow-md hover:shadow-lg bg-near-white hover-bg-white"
              >
              <img className="px-2 h-40 w-full object-cover" src={ycslogo} alt="" />

              <div className="h-24 w-full p-3 flex bg-gray-800 text-pink-200">
                <span className="mt-auto text-sm font-light tracking-wider uppercase">Your Christmas Store</span>
              </div>
            </Link>
          </div>
          <div className="w-full sm:w-1/2 mx-10 md:w-1/4 sm:mx-0 px-2 rise mb-5">
            <Link
              to="/work/cal-poly"
              className="block shadow-md hover:shadow-lg bg-near-white hover-bg-white"
              >
<CPLogo className="px-2 h-40 w-full object-cover"/>

              <div className="h-24 w-full p-3 flex bg-gray-800 text-pink-200">
                <span className="mt-auto text-sm font-light tracking-wider uppercase">Cal Poly</span>

              </div>
            </Link>
          </div>
          <div className="w-full sm:w-1/2 mx-10 md:w-1/4 sm:mx-0 px-2 rise mb-5">
            <a
              href="https://colonymedia.us"
              className="block shadow-md hover:shadow-lg bg-near-white hover-bg-white"
              >
              {/* <Link
          to="/work/sct-usa"
          className="block shadow-md hover:shadow-lg bg-near-white hover-bg-white"
        > */}
              <img className="px-2 h-40 w-full object-cover" src={colonymedia} alt="" />

              <div className="h-24 w-full p-3 flex bg-gray-800 text-pink-200">
                <span className="mt-auto text-sm font-light tracking-wider uppercase">Colony Media</span>
              </div>
            </a>
            {/* </Link> */}
          </div>
          <div className="w-full sm:w-1/2 mx-10 md:w-1/4 sm:mx-0 px-2 rise mb-5">
            <a
              href="https://sctusa.com"
              className="block shadow-md hover:shadow-lg bg-near-white hover-bg-white"
              >
              {/* <Link
          to="/work/sct-usa"
          className="block shadow-md hover:shadow-lg bg-near-white hover-bg-white"
        > */}
              <img className="px-2 h-40 w-full object-cover" src={scootlogo} alt="" />

              <div className="h-24 w-full p-3 flex bg-gray-800 text-pink-200">
                <span className="mt-auto text-sm font-light tracking-wider uppercase">SCT USA</span>
              </div>
            </a>
            {/* </Link> */}
          </div>
          <div className="w-full sm:w-1/2 mx-10 md:w-1/4 sm:mx-0 px-2 rise mb-5">
            <a
              href="https://lighthouseatascadero.org"
              className="block shadow-md hover:shadow-lg bg-near-white hover-bg-white"
              >
              {/* <Link 
          to="/work/lighthouse" className=block shadow-md hover:shadow-lg
          bg-near-white hover-bg-whit" >
        */}
              <img className="px-2 h-40 w-full object-cover" src={lighthouse} alt="" />
              <div className="h-24 w-full p-3 flex bg-gray-800 text-pink-200">
                <span className="mt-auto text-sm font-light tracking-wider uppercase ">Lighthouse Atascadero</span>
              </div>
            </a>
            {/* </Link> */}
          </div>
        </div>
        </div>


      </Layout>
    )
  }
}

export default WorkPage
