import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import '../assets/index.css'
class Writing extends React.Component {
  render() {
    const siteTitle = 'Writing'
    const siteDescription =
      'A collection of blog posts and personal archives for Finley Chen'
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={'Finley Chen - ' + siteTitle}
        />
        <h1 className="text-2xl md:text-6xl font-bold mt-10 md:mt-20">Writing</h1>
        <div className="measure-wide center">
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <div className="post my-4" key={node.fields.slug}>
                <Link
                  className=" font-medium text-lg md:text-xl hover:text-gray-600"
                  to={node.fields.slug}
                >
                  {title}
                  <small className="block">
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
