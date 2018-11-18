import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import About from '../components/About'
import Layout from '../components/Layout'
import '../assets/index.css';
class AboutPage extends React.Component {
  render() {
    const siteTitle = 'about finley chen'
    const siteDescription = 'Finley Chen is a frontend web developer in San Luis Obispo. He works with Javascript and WordPress'

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <p className="display">
          I’m a freelance web developer who specializes in WordPress. I create functional, fast and responsive websites optimized for search engines.
</p>
        <About />
      </Layout>
    )
  }
}

export default AboutPage

