import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import { GiSpeedometer, GiEntryDoor, GiMagnifyingGlass } from 'react-icons/gi'
import ycslogo from '../assets/ycs-logo-square.png'
import allpeoplelogo from '../assets/allpeople-logo.png'
import CPLogo from '../assets/svg/cplogo.svg'
import scootlogo from '../assets/sct-usa-logo-square.png'
import colonymedia from '../assets/colony-media-logo-square.png'
import lighthouse from '../assets/images/lighthouse-atascadero.png'
import church from '../assets/images/church-logo.png'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Fade from 'react-reveal/Fade'
import flower3 from '../assets/flower3.png'

import '../assets/index.css'
import { cpus } from 'os'
import { FiPaperclip } from 'react-icons/fi'
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
        <div className="flex flex-col md:flex-row justify-between items-center flex-col-reverse">
          <div>
            <h1 className="text-3xl md:text-6xl font-bold mt-10 md:mt-20 mb-5  tracking-tight">
              Hand-crafted, quality websites.
            </h1>

            <p className="text-lg md:text-3xl max-w-2xl font-light text-gray-800">
              I’m a freelance web developer who specializes in WordPress,
              WooCommerce and Shopify.{' '}
            </p>
          </div>
          <div className="max-w-xs">
            <img src={flower3} alt="cover image" className="" />
          </div>
        </div>

        <div className="p-5 md:p-20 " />

        <div className="flex flex-col md:flex-row">

        <div className="md:w-1/3 md:mr-10">

        <h2 className="text-lg mb-1">WordPress Design &amp; Development</h2>
        <p className="font-light">
          I offer WordPress services in <strong>maintenance</strong>,{' '}
          <strong>design</strong>, and <strong>development</strong> for all kinds of clients: small business, churches, nonprofits, and more. Need a
          custom theme or plugin? Broken site with errors? Need maintenance and updates?
          I can help.
        </p>
        </div>
        <div className="md:w-1/3">

        <h2 className="text-lg mb-1">eCommerce</h2>
        <p className="font-light">
          I build and manage small to medium sized eCommerce sites, primarily in WooCommerce. I have experience working on all aspects of a successful eCommerce store, including speed and accessibility optimizations, SEO, and high-converting design and user experience.
        </p>
        </div>
        </div>

        <h2 className="text-center sm:text-left font-bold text-md md:text-2xl my-10">
          Some examples of my work
        </h2>

        <div className="">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 mx-5 md:w-1/3 sm:mx-0 px-2 rise mb-5">
              <Link
                to="/work/allpeople"
                className="block shadow-lg hover:shadow-xl bg-near-white hover-bg-white"
              >
                <img
                  className="px-2 h-48 md:h-32 w-full object-cover"
                  src={allpeoplelogo}
                  alt=""
                />

                <div className="h-20 w-full p-3 flex bg-gray-800 text-pink-200">
                  <span className="mt-auto text-sm font-light tracking-wider uppercase">
                    AllPeople
                  </span>
                </div>
              </Link>
            </div>
            <div className="w-full sm:w-1/2 mx-5 md:w-1/3 sm:mx-0 px-2 rise mb-5">
              <Link
                to="/work/your-christmas-store"
                className="block shadow-lg hover:shadow-xl bg-near-white hover-bg-white"
              >
                <img
                  className="px-2 h-48 md:h-32 w-full object-cover"
                  src={ycslogo}
                  alt=""
                />

                <div className="h-20 w-full p-3 flex bg-gray-800 text-pink-200">
                  <span className="block mt-auto text-sm font-light tracking-wider uppercase">
                    Your Christmas Store
                  </span>
                  
                </div>
              </Link>
            </div>
            <div className="w-full sm:w-1/2 mx-5 md:w-1/3 sm:mx-0 px-2 rise mb-5">
              <Link
                to="/work/cal-poly"
                className="block shadow-lg hover:shadow-xl bg-near-white hover-bg-white"
              >
                <CPLogo className="px-2 h-48 md:h-32 w-full object-cover" />

                <div className="h-20 w-full p-3 flex bg-gray-800 text-pink-200">
                  <span className="mt-auto text-sm font-light tracking-wider uppercase">
                    Cal Poly
                  </span>
                </div>
              </Link>
            </div>
            <div className="w-full sm:w-1/2 mx-5 md:w-1/3 sm:mx-0 px-2 rise mb-5">
              <Link
                to="/work/grace-baptist"
                className="block shadow-lg hover:shadow-xl bg-near-white hover-bg-white"
              >
              <img
                  className="px-2 h-48 md:h-32 w-full object-cover"
                  src={church}
                  alt=""
                />
                <div className="h-20 w-full p-3 flex bg-gray-800 text-pink-200">
                  <span className="mt-auto mr-auto text-sm font-light tracking-wider uppercase">
                    Grace Baptist Church
                  </span>
                    <FiPaperclip className="float-right mt-auto"/>
                </div>
              </Link>
            </div>
            
            <div className="w-full sm:w-1/2 mx-5 md:w-1/3 sm:mx-0 px-2 rise mb-5">
              <a
                href="https://sctusa.com"
                className="block shadow-lg hover:shadow-xl bg-near-white hover-bg-white"
              >
                {/* <Link
          to="/work/sct-usa"
          className="block shadow-lg hover:shadow-xl bg-near-white hover-bg-white"
        > */}
                <img
                  className="px-2 h-48 md:h-32 w-full object-cover"
                  src={scootlogo}
                  alt=""
                />

                <div className="h-20 w-full p-3 flex bg-gray-800 text-pink-200">
                  <span className="mt-auto mr-auto text-sm font-light tracking-wider uppercase">
                    SCT USA
                  </span>
                  <FiPaperclip className="float-right mt-auto"/>

                </div>
              </a>
              {/* </Link> */}
            </div>
            <div className="w-full sm:w-1/2 mx-5 md:w-1/3 sm:mx-0 px-2 rise mb-5">
              <a
                href="https://lighthouseatascadero.org"
                className="block shadow-lg hover:shadow-xl bg-near-white hover-bg-white"
              >
                {/* <Link 
          to="/work/lighthouse" className=block shadow-lg hover:shadow-xl
          bg-near-white hover-bg-whit" >
        */}
                <img
                  className="px-2 h-48 md:h-32 w-full object-cover"
                  src={lighthouse}
                  alt=""
                />
                <div className="h-20 w-full p-3 flex bg-gray-800 text-pink-200">
                  <span className="mt-auto mr-auto text-sm font-light tracking-wider uppercase ">
                    Lighthouse Atascadero
                  </span>
                  <FiPaperclip className="float-right mt-auto"/>

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
