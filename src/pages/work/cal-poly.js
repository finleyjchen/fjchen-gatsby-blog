import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { FiMapPin } from 'react-icons/fi'
import { IoMdHourglass } from 'react-icons/io'
import { FiArrowUpRight } from 'react-icons/fi'

import Bio from '../../components/Bio'
import Work from '../../components/Work'
import Layout from '../../components/Layout'
import '../../assets/index.css'
import { IoIosLink } from 'react-icons/io'
class CalPoly extends React.Component {
  render() {
    const siteTitle = 'work'
    const siteDescription =
      'Finley Chen works hard to develop exactly what the client needs.'

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={'Finley Chen - ' + siteTitle}
        />

        <article className="">
          <h1 className="f1-ns f3 lh-title">
            <a
              href="https://afd.calpoly.edu"
              className="link hover-bg-black hover-white"
            >
              California Polytechnic State University{' '}
              <FiArrowUpRight className="dib" />
            </a>
          </h1>

          <p className="f3 measure">
            Student assistant front-end web developer for Cal Poly's
            Administration and Finance Department (AFD).
          </p>
        </article>
        <img src="" alt="" />

        <article className="measure ">
          <h2>New Template Migration</h2>
          <p className="lh-copy">
            At Cal Poly, I'm helping scaffold out sites for the Administration
            and Finance department. My role is in the design and hard-coding of
            pages for each subdepartment. I'm given site templates with content
            in Word Docs and convert them to semantic, organized HTML and PHP.
          </p>

          <p className="lh-copy">
            Working for Cal Poly has taught me the groundworks for making
            clean-coded websites:
          </p>
          <ul className="lh-copy">
            <li>Writing CSS efficiently</li>
            <li>Semantic HTML </li>
            <li>Accessible HTML as well as accessible UI</li>
            <li>Designing user-friendly layouts</li>
            <li>Finding new ways to display different types of content</li>
          </ul>
        </article>
      </Layout>
    )
  }
}

export default CalPoly
