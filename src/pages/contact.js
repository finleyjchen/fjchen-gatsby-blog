import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import About from '../components/About'
import Layout from '../components/Layout'
import '../assets/index.css'
const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }
  render() {
    const siteTitle = 'Contact'
    const siteDescription = 'Contact Me'
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          meta={[{ name: 'description', content: siteDescription }]}
          title={'Finley Chen - ' + siteTitle}
        />
        <h1 className="text-2xl md:text-6xl font-bold my-10 md:my-20">Contact Me</h1>
        <p className="f5 f4-ns lh-title tc">
          I'm interested in what you have to say.
        </p>
        <p><a href="mailto:finleyjchen@gmail.com">finleyjchen@gmail.com</a></p>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="w-full max-w-sm"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Don’t fill this out:{' '}
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="bot-field"
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Your name:
              <br />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="name"
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Your email:
              <br />
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message:
              <br />
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="message"
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <button type="submit" className="px-4 py-2 border-gray-800 border-2 bg-gray-800 text-pink-200 hover:text-pink-300 hover:bg-gray-700 shadow-md hover:shadow-lg rise block max-w-xs">Send</button>
          </p>
        </form>
      </Layout>
    )
  }
}
