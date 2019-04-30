import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Work from '../components/Work'
import Layout from '../components/Layout'
import '../assets/index.css'
class WorkPage extends React.Component {
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
        <Work />
      </Layout>
    )
  }
}

export default WorkPage
