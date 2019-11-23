import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
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
          <ul className="flex justify-between p-2 text-sm mb-4">
          <li className="">
            {previous && (
              <Link
                to={previous.fields.slug}
                className="next-post-link"
                rel="prev"
              >
                <FiArrowLeft className="inline mb-1 mr-1 " />
                <span className="hover:underline">{previous.frontmatter.title}</span>
              </Link>
            )}
          </li>
          <li className="">
            {next && (
              <Link to={next.fields.slug} className=" next-post-link" rel="next">
                <span className="hover:underline">{next.frontmatter.title}</span>
                <FiArrowRight className="inline mb-1 ml-1" />
              </Link>
            )}
          </li>
        </ul>
        <div className="max-w-xl blog-post">
          <header className="pt-3 my-4 ">

          <p className="text-xs mb-0 uppercase tracking-wide">{post.frontmatter.date}</p>
          <h1 className="text-2xl">
            {post.frontmatter.title}
          </h1>
          </header>
          <div
            className="lh-copy "
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
        <div className="dotted-line" />
        <Bio />


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
