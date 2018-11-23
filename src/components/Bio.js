import React from 'react'

// Import typefaces


import profileImg from './profile-img.jpg'

class Bio extends React.Component {
  render() {
    return (
      <div
        className="bio "
      >
              <img className="profile-img" src={profileImg} alt='finley chen photo' />

        <p>

          Hi, my name is <strong>Finley Chen</strong>.
        </p>
        <p>
          I'm a web developer studying at Cal Poly, San Luis Obispo. In addition to working solo, I am involved in a few projects with <a href="https://colonymedia.us">Colony Media</a>.
        </p>
        <p>I'm always looking for work. I specialize in databases and business IT infrastructure, WordPress, React, and SEO. If you need a designer I can also connect you to one.  Just <a href="mailto:finleyjchen@gmail.com">shoot me a message.</a></p>
        <div className="social-links">
          <a href="mailto:finleyjchen@gmail.com">
            Email
          </a>
          <a href="https://github.com/inlorfaze">
            Github
          </a>
          <a href="https://www.linkedin.com/in/finleychen/" >
            LinkedIn
          </a>
          <a href="https://twitter.com/finleychen">
            Twitter
          </a>
        </div>
      </div>

    )
  }
}

export default Bio
