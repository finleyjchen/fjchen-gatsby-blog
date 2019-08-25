import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { FiSkipBack, FiSkipForward } from 'react-icons/fi'
import '../assets/index.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const disqusShortname = 'fjchen'
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    }
    return (
      <Layout location={this.props.location} title={'fjchen.net'}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />

        <div className="mw7 center">
          <p className="lh-title mv0 tc ttu tracked">{post.frontmatter.date}</p>
          <h1 className="fw5 f1-ns f2 fh-title tc mt0">
            {post.frontmatter.title}
          </h1>
          <div
            className="lh-copy "
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
        <div className="dotted-line" />
        <Bio />

        <ul className="flex justify-between mw7 center pa0">
          <li className="db w-50 tl ">
            {previous && (
              <Link
                to={previous.fields.slug}
                className="next-post-link"
                rel="prev"
              >
                <FiSkipBack className="db w-10 fl" />
                <span className="db fr w-90">{previous.frontmatter.title}</span>
              </Link>
            )}
          </li>
          <li className="db w-50 tr">
            {next && (
              <Link to={next.fields.slug} className="next-post-link" rel="next">
                <FiSkipForward className="db w-10 fr" />
                <span className="db fr w-90">{next.frontmatter.title}</span>
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
