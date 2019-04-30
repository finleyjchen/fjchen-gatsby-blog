import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { FiMapPin } from 'react-icons/fi'
import { IoMdHourglass, IoIosLink } from 'react-icons/io'
import Bio from '../../components/Bio'
import Work from '../../components/Work'
import Layout from '../../components/Layout'
import '../../assets/index.css'
import ycslogo from '../../assets/ycs-logo-square.png'
import ycsphoto from '../../assets/ycs-work.png'
class YourChristmasStore extends React.Component {
  render() {
    const siteTitle = 'Your Christmas Store'
    const siteDescription =
      'Finley Chen works hard to develop exactly what the client needs.'
    const info = {}
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={'finley - ' + siteTitle}
        />

        <a
          href="https://yourchristmasstore.com"
          className=" fr db tc center mt2 mt0-ns dib-ns f5 f3-ns link ba bw1 ph3 pv2 mb2 bg-black bg-animate white b--near-black hover-bg-white hover-near-black "
        >
          yourchristmasstore.com <IoIosLink />
        </a>
        <article className="">
          <h1 className="f1-ns f3 lh-title">
            <a href="https://yourchristmasstore.com" className="link">
              YourChristmasStore
            </a>
          </h1>
          <p className="f3 measure">
            YourChristmasStore is the online eCommerce store for the local San
            Diego Christmas store, Canterbury Gardens & Gifts.
          </p>
        </article>
        <img src={ycsphoto} alt="" />

        <article className="measure center">
          <h2>Migration</h2>
          <p className="lh-copy">
            When I first approached Dave with his website, Canterbury Gardens &
            Gifts, he had the remnants of a Magento 1 site. I helped Dave
            identify pain points in running his eCommerce store.{' '}
          </p>
          <p className="lh-copy">
            We decided to migrate from Magento to WordPress and WooCommerce.
            This made maintaining SEO, speed, and product pages be a much more
            hands-on experience, rather than the systematic Magento.
          </p>
        </article>

        <article className="measure center">
          <h2>Search Engines</h2>
          <p className="lh-copy">
            YourChristmasStore's main products are the Mark Roberts Collection.
            In turn, I focused on SEO for the Mark Roberts category and
            individual product pages. This included hand-written metadata, image
            tags and semantic html.
          </p>
        </article>

        <article className="measure center">
          <h2>Email Marketing</h2>
          <p className="lh-copy">
            When users sign up for an account on YourChristmasStore, they opt-in
            to a newsletter. I designed these emails for both YourChristmasStore
            and for local customers at Canterbury Gardens & Gifts.
          </p>
        </article>
      </Layout>
    )
  }
}

export default YourChristmasStore
