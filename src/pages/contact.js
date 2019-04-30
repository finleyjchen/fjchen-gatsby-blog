import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import About from '../components/About'
import Layout from '../components/Layout'
import '../assets/index.css'
class Contact extends React.Component {
  render() {
    const siteTitle = 'about'
    const siteDescription =
      'Finley Chen is a web developer in San Luis Obispo. He works with Javascript and WordPress to create online experiences.'

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={'finley - ' + siteTitle}
        />
        <h1 className="fw5 f1-ns f2 fh-title tc">Contact Me</h1>
        <p className="f5 f4-ns lh-title tc">
          I'm interested in what you have to say.
        </p>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="mw7 center mv5"
        >
          <div className="field half first">
            <label className="db fw4 lh-copy f6" htmlFor="name">
              Name
            </label>
            <input
              className="pa2 input-reset ba bg-transparent w-100"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="field half">
            <label className="db fw4 lh-copy f6" htmlFor="email">
              Email
            </label>
            <input
              className="pa2 input-reset ba bg-transparent w-100"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <div className="field">
            <label className="db fw4 lh-copy f6" htmlFor="message">
              Message
            </label>
            <textarea
              className="pa2 input-reset ba bg-transparent w-100"
              name="message"
              id="message"
              rows="6"
            />
          </div>
          <ul className="actions list pa0 cf">
            <li className="fl">
              <input
                className="pa2 input-reset ba bg-dark-gray dim link white "
                type="submit"
                value="Send Message"
              />
            </li>
            <li className="fr">
              <input
                className="pa2 input-reset ba b--white bg-dark-gray dim link white fr"
                type="reset"
                value="Clear"
              />
            </li>
          </ul>
        </form>
      </Layout>
    )
  }
}

export default Contact
