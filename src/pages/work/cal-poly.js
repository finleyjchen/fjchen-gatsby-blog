import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { FiMapPin } from 'react-icons/fi'
import { IoMdHourglass } from 'react-icons/io'
import { FiArrowUpRight } from 'react-icons/fi'
import CPWork from '../../assets/svg/cplogo.svg'
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

        <article className="py-10 flex flex-col md:flex-row">
        <div className="md:w-1/2 p-3 sm:p-0">

          <h1 className="text-2xl md:text-5xl mb-3 md:mb-0">
            <a
              href="https://afd.calpoly.edu"
              className="hover:bg-gray-800 hover:text-pink-200"
            >
              California Polytechnic State University{' '}
              <FiArrowUpRight className="inline-block" />
            </a>
          </h1>

          <p className="text-lg font-light md:text-2xl max-w-xl">
            Student assistant front-end web developer for Cal Poly's
            Administration and Finance Department (AFD).
          </p>
          </div>
          <CPWork className="max-w-xl md:w-1/2 w-full shadow-lg px-10 m-10" />
        </article>

        <article className="max-w-xl my-5 md:my-10 ">
          <h2>New Template Migration</h2>
          <p className="font-light">
            At Cal Poly, I'm helping scaffold out sites for the Administration
            and Finance department. My role is in the design and hard-coding of
            pages for each subdepartment. I'm given site templates with content
            in Word Docs and convert them to semantic, organized HTML and PHP.
          </p>

          <p className="font-light">
            Working for Cal Poly has taught me the groundworks for making
            clean-coded websites:
          </p>
          <ul className="font-light list-disc list-inside">
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
