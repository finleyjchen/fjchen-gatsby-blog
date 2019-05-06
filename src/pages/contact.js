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
        <h1 className="fw5 f1-ns f2 fh-title tc">Contact Me</h1>
        <p className="f5 f4-ns lh-title tc">
          I'm interested in what you have to say.
        </p>
        <form
          name="contact"
          method="post"
          action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className="center measure"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label className="db fw4 lh-copy f6">
              Don’t fill this out:{' '}
              <input
                className="pa2 input-reset ba bg-transparent w-100"
                name="bot-field"
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label className="db fw4 lh-copy f6">
              Your name:
              <br />
              <input
                className="pa2 input-reset ba bg-transparent w-100"
                type="text"
                name="name"
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label className="db fw4 lh-copy f6">
              Your email:
              <br />
              <input
                className="pa2 input-reset ba bg-transparent w-100"
                type="email"
                name="email"
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label className="db fw4 lh-copy f6">
              Message:
              <br />
              <textarea
                className="pa2 input-reset ba bg-transparent w-100"
                name="message"
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Layout>
    )
  }
}
