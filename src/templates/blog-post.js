import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { DiscussionEmbed } from 'disqus-react'
import Author from '../components/Author'
import Layout from '../components/Layout'
import '../assets/index.css';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const siteDescription = post.excerpt
    const { previous, next } = this.props.pageContext
    const disqusShortname = "fjchen";
    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    };
    return (
      <Layout location={this.props.location} title={"fjchen.net"}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={`${post.frontmatter.title} | ${siteTitle}`}
        />
        <h1>{post.frontmatter.title}</h1>
        <p><strong className="post-date">{post.frontmatter.date}</strong></p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />

          <div className="dotted-line"></div>
          <Author />

          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
            }}
          >
            <li>
              {
                previous &&
                <Link to={previous.fields.slug} className="next-post-link" rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              }
            </li>
            <li>
              {
                next &&
                <Link to={next.fields.slug} className="next-post-link" rel="next">
                  {next.frontmatter.title} →
  
              </Link>
              }
            </li>
          </ul>
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />

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
    markdownRemark(fields: {slug: {eq: $slug } }) {
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
