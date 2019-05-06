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
import SocialLinks from '../components/SocialLinks'
class Index extends React.Component {
  render() {
    const siteTitle = 'Finley Chen'
    const siteDescription =
      'Freelance web developer in San Luis Obispo specializing in WordPress and eCommerce.'
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={'Finley Chen | WordPress Developer'}
        />
        <div className="mv5-ns cf">
          <div className="fl w-100 w-50-ns  ">
            <h1 className="f1 f1-ns fw5 lh-headline mb0">
              WordPress Design & Development
            </h1>
            <h2 className="f4 f2-ns lh-headline fw3 mt0 mb3 gray">
              Speed, accessibility, and SEO.
            </h2>

            <p className="f4 measure lh-copy mb4">
              Hi there, my name is Finley. I’m a freelance web developer who
              specializes in WordPress and Woocommerce. Hire me to create
              functional, fast and responsive websites optimized for search
              engines.
            </p>

            <SocialLinks />
          </div>
          <div className="fl w-100 w-50-ns tr">
            <img src={cover3} alt="cover image" className="" />
          </div>
        </div>

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

export default Index
