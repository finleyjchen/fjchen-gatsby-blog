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
  constructor(props) {
    super(props)
  }
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
        <div className="dt w-100">

        <div className="w-50-ns fl pa2 pa5-l vh-50-l">
            <h1 className="f1 f1-l  lh-headline mb0 measure ">
            Hi, my name is Finley.
            </h1>

            <p><span className="f2 near-black">I'm a student at <a href="https://calpoly.edu" className="link dark-green dim">Cal Poly</a> and a developer at <a href="https://allpeople.co" className="link dim purple">AllPeople</a></span>.</p>

        <SocialLinks />
        </div>
        <div className="w-50-l fl tc pa2 pa5-l vh-50-l ">
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
