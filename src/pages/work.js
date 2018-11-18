import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Work from '../components/Work'
import Layout from '../components/Layout'
import '../assets/index.css';
class WorkPage extends React.Component {
  render() {
    const siteTitle = 'work'
    const siteDescription = 'about finley chen'

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={siteTitle}
        />
        <Work />
      </Layout>
    )
  }
}

export default WorkPage

