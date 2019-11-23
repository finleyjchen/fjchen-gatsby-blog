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
import ycslogo from '../../assets/ycs-logo-square.png'
import ycsphoto from '../../assets/ycs-work.png'
import Fade from 'react-reveal/Fade'

class YourChristmasStore extends React.Component {
  render() {
    const siteTitle = 'Your Christmas Store'
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
          <h1 className="text-2xl md:text-3xl mb-3 md:mb-0">
            
            <a
              href="https://yourchristmasstore.com"
              className="hover:bg-gray-800 hover:text-pink-200"
              >
              YourChristmasStore <FiArrowUpRight className="inline-block" />
            </a>
          </h1>
          <p className="text-lg font-light md:text-xl max-w-xl">
            YourChristmasStore is the online eCommerce store for the local San
            Diego Christmas store, Canterbury Gardens & Gifts.
          </p>
              </div>
        <img className="max-w-xl md:w-1/2 w-full shadow-lg" src={ycsphoto} alt="" />
        </article>

        <article className="max-w-xl my-5 md:my-10 ">
          <h2>Migration</h2>
          <p className="font-light">
            When I first approached Dave with his website, Canterbury Gardens &
            Gifts, he had the remnants of a Magento 1 site. I helped Dave
            identify pain points in running his eCommerce store.{' '}
          </p>
          <p className="font-light">
            We decided to migrate from Magento to WordPress and WooCommerce.
            This made maintaining SEO, speed, and product pages be a much more
            hands-on experience, rather than the systematic Magento.
          </p>
        </article>

        <article className="max-w-xl my-5 md:my-10">
          <h2>Search Engines</h2>
          <p className="font-light">
            YourChristmasStore's main products are the Mark Roberts Collection.
            In turn, I focused on SEO for the Mark Roberts category and
            individual product pages. This included hand-written metadata, image
            tags and semantic html.
          </p>
        </article>

        <article className="max-w-xl my-5 md:my-10">
          <h2>Email Marketing</h2>
          <p className="font-light">
            When users sign up for an account on YourChristmasStore, they opt-in
            to a newsletter. I designed these emails for both YourChristmasStore
            and for local customers at Canterbury Gardens & Gifts.
          </p>
        </article>
        <article className="max-w-xl my-5 md:my-10 links">
          <h2 className="mb-1">Technologies</h2>
          <ul className="list-disc list-inside">
            <li>WordPress</li>
            <li>Adobe Photoshop/Illustrator</li>
            <li>HTML/CSS</li>
            <li>jQuery</li>
            <li>SQL</li>
            <li>PHP</li>
          </ul>
        </article>
      </Layout>
    )
  }
}

export default YourChristmasStore
