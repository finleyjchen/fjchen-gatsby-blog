import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { FiMapPin } from 'react-icons/fi'
import { IoMdHourglass, IoIosLink } from 'react-icons/io'
import { FiArrowUpRight } from 'react-icons/fi'
import Bio from '../../components/Bio'

import Layout from '../../components/Layout'
import '../../assets/index.css'
import ycslogo from '../../assets/images/church-work-2.png'
import churchWork from '../../assets/images/church-work.png'
import Fade from 'react-reveal/Fade'

class GraceBaptistPaso extends React.Component {
  render() {
    const siteTitle = 'Grace Baptist Church'
    const siteDescription =
      'eCommerce Christmas gift and decor store created by Finley Chen.'
    const info = {}
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={'Finley Chen - ' + siteTitle}
        />

        <article className="py-10 flex flex-col md:flex-row">
          <div className="md:w-1/2 p-3 sm:p-0">
          <h1 className="text-2xl md:text-5xl mb-3 md:mb-0">
            
            <a
              href="https://gracebaptistpaso.org"
              className="hover:bg-gray-800 hover:text-pink-200"
              >
              GraceBaptistPaso <FiArrowUpRight className="inline-block" />
            </a>
          </h1>
          <p className="text-lg font-light md:text-2xl max-w-xl">
            The website for the Grace Baptist Church in Paso Robles, CA.
          </p>
              </div>
        <img className="max-w-xl md:w-1/2 w-full shadow-lg" src={churchWork} alt="" />
        </article>

        <article className="max-w-xl my-5 md:my-10 ">
          <h2>Design &amp; Development</h2>
          <ul>
            <li>Custom WordPress design & development</li>
          </ul>

        </article>


      </Layout>
    )
  }
}

export default GraceBaptistPaso
