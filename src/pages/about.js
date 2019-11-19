import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import About from '../components/About'
import Layout from '../components/Layout'
import '../assets/index.css'
class AboutPage extends React.Component {
  render() {
    const siteTitle = 'About'
    const siteDescription =
      'Finley Chen is a web developer in San Luis Obispo. He works with Javascript and WordPress to create online experiences.'

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={'Finley Chen - ' + siteTitle}
        />
        <div className="flex flex-col md:flex-row justify-between flex-col-reverse">
          <div>
            <h1 className="text-3xl md:text-6xl font-bold mt-10 md:mt-20 mb-5 tracking-tight">
              Striving for greatness
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl text-gray-800 font-light">
              Hi, I'm Finley. I'm a 19-year old front-end web developer and
              aspiring tech entrepreneur. I build digital experiences with
              human-friendly design and a focus on accessibility, semantic SEO,
              and speed.
            </p>
          </div>
          <div className="max-w-xs" />
        </div>

        <div className="flex flex-col md:flex-row py-10 md:py-20">
          <div className="md:w-3/4 flex leading-relaxed flex-wrap">
            <p className="md:w-1/2 md:pr-6 pb-6">
              Since high school, I have been relentlessly pursuing
              software engineering, UX/UI design, and digital marketing,
              starting with local businesses and family friends since high
              school. My experience starts as the web developer for a local
              Christmas eCommerce store. Through this
              experience I planted the seeds to expand my knowledge and skill in
              code and design, working on more freelance projects.
            </p>

            <p className="md:w-1/2 md:pr-6 pb-6">
              Aside from being a front-end web developer, I am a student in San Luis Obispo at
              California Polytechnic State University studying political
              science. I'm interested in social choice thoery and political
              philosophy. It's a goal of mine to find a way to somehow bridge my
              interests in design, code, and civics in a fulfilling project.
            </p>

            <p className="md:w-1/2 md:pr-6 pb-6">
              <Link
                className="text-xl bg-gray-800 text-pink-200 px-4 py-2 mr-4 hover:bg-pink-200 hover:text-gray-800 inline-block"
                to="/work"
              >
                My Work
              </Link>
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default AboutPage
