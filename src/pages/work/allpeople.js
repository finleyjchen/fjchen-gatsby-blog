import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { FiMapPin } from 'react-icons/fi'
import { IoMdHourglass, IoIosLink } from 'react-icons/io'
import { FiArrowUpRight } from 'react-icons/fi'
import Bio from '../../components/Bio'
import Work from '../../components/Work'
import Layout from '../../components/Layout'
import '../../assets/index.css'
import ycslogo from '../../assets/ycs-logo-square.png'
import ycsphoto from '../../assets/ycs-work.png'
import Fade from 'react-reveal/Fade'

class AllPeople extends React.Component {
  render() {
    const siteTitle = 'Your Christmas Store'
    const siteDescription =
      'eCommerce Christmas gift and decor store created by Finley Chen.'
    const info = {}
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={'Finley Chen - ' + siteTitle}
        />

        <article className="py-10 flex flex-col md:flex-row">
          <div className="md:w-1/2 p-3 sm:p-0">
          <h1 className="text-2xl md:text-5xl mb-3 md:mb-0">
            
            <a
              href="https://allpeople.co"
              className="hover:bg-gray-800 hover:text-pink-200"
              >
              AllPeople.co <FiArrowUpRight className="inline-block" />
            </a>
          </h1>
          <p className="text-lg font-light md:text-2xl max-w-xl">
            AllPeople is an ethical eCommerce marketplace for eco-friendly products.
          </p>
              </div>
        {/* <img className="max-w-xl md:w-1/2 w-full shadow-lg" src={ycsphoto} alt="" /> */}
        </article>

        <article className="max-w-xl my-5 md:my-10 links">
          <h2>Shopify vs WordPress/WooCommerce</h2>
          <p className="font-light">
            AllPeople is an eCommerce startup located at the <a href="http://sbdc.calpoly.edu/slo-hothouse/" className="">Cal Poly HotHouse</a> business incubator.
          </p>
          <p className="font-light">I helped develop the initial MVP for the site in Shopify, working in Liquid to hack in features to personalize information from nonprofit referral links.</p>
          <p className="font-light">Currently, we decided WooCommerce would offer control over our own server and many customization benefits that Shopify basic doesn't have to offer. In turn, I have been developing a fully-featured WooCommerce site.</p>
        </article>


      </Layout>
    )
  }
}

export default AllPeople
