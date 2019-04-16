import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import '../assets/index.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'tachyons/css/tachyons.min.css'
class BlogIndex extends React.Component {
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
          title={'Finley Chen | WordPress Developer'}
        />
        <Bio />
        {/* {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div className="post mv3" key={node.fields.slug}>
              <Link
                className="db post-link link dim b f3"
                to={node.fields.slug}
              >
                {title}
                <small className="f6 db pt1 ttu tracked">
                  {node.frontmatter.date}
                </small>
              </Link>
            </div>
          )
        })} */}
      </Layout>
    )
  }
}

export default BlogIndex

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
