import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import '../assets/index.css'
class Writing extends React.Component {
  render() {
    const siteTitle = 'Finley Chen'
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={'finley - ' + siteTitle}
        />
        <h1 className="fw5 f1-ns f2 fh-title tc">Writing</h1>
        <div className="measure-wide center">
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div className="post mv4" key={node.fields.slug}>
                <Link
                  className="db post-link link dim b f3 f3-ns fw5"
                  to={node.fields.slug}
                >
                  {title}
                  <small className="f6 db pt1 ttu tracked fw7 gray">
                    {node.frontmatter.date}
                  </small>
                </Link>
              </div>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default Writing

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
