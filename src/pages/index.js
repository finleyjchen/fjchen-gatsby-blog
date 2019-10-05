import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import '../assets/index.css'
import 'prismjs/themes/prism-tomorrow.css'
import cover3 from '../assets/cover-min.gif'
import SocialLinks from '../components/SocialLinks'
import flower from '../assets/flower2.png'
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
        <div className="my-10 md:my-40" >

        <div className=" flex flex-col md:flex-row justify-between items-center" >
          <div className="">

            <h1 className="text-3xl md:text-5xl font-bold">
            Hi, I'm Finley.
            </h1>


            <p className="text-2xl md:text-3xl font-medium"><span className="">I'm a student at <a href="https://calpoly.edu" className="font-bold text-green-800 hover:text-gray-700">Cal Poly</a> and a developer at <a href="https://allpeople.co" className="font-bold text-purple-800	hover:text-gray-700">AllPeople</a></span>.</p>
          </div>
        <div className="max-w-xs">
        <img src={flower} alt="cover image" className="" />
        </div>

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
