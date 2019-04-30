import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { FiMapPin } from 'react-icons/fi'
import { IoMdHourglass } from 'react-icons/io'
import Bio from '../../components/Bio'
import Work from '../../components/Work'
import Layout from '../../components/Layout'
import '../../assets/index.css'
class ColonyMedia extends React.Component {
  render() {
    const siteTitle = 'work'
    const siteDescription =
      'Finley Chen works hard to develop exactly what the client needs.'

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={'finley - ' + siteTitle}
        />
        <h1 className="f1-ns f3 lh-title">ColonyMedia</h1>
        <div className="post">
          <h3>
            <a href="https://ColonyMedia.com" className="post-link">
              Canterbury Gardens & Gifts
            </a>
          </h3>
          <p className="f6 lh-copy ma0">
            <FiMapPin /> San Diego, CA
          </p>
          <p className="f6 lh-copy ma0">
            <IoMdHourglass />
            April 2016 – Present
          </p>
          <p>
            Creating a new WP/WooCommerce website with 2000+ products, managing
            eCommerce database entries and batch product uploads, doing SEO
            work, and managing orders, shipments, and invoices.
          </p>
        </div>
      </Layout>
    )
  }
}

export default ColonyMedia
