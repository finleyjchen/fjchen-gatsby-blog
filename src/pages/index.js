import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import '../assets/index.css'
import 'prismjs/themes/prism-tomorrow.css'
import 'tachyons/css/tachyons.min.css'
import cover3 from '../assets/cover-min.gif'

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
        <div className="mb5">
          <div className="dtc v-mid ">
            <p className="f2 f1-ns fw4 lh-headline mb0">
              Websites built to grow.
            </p>
            <p className="f2-ns lh-copy fw3 mt0">
              Speed, accessibility, and SEO.
            </p>
          </div>
          <div className="dtc v-mid">
            <img src={cover3} alt="cover image" className="mw5-ns mw4" />
          </div>
        </div>
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
