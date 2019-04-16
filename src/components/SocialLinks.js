import React from 'react'

import {
  IoIosSpeedometer,
  IoIosMail,
  IoLogoTwitter,
  IoLogoTwitch,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io'
const SocialLinks = () => (
  <div className="social-links mb4 f2 tc tl-ns">
    <a className="mh2 mr3-l ml0-l dim link" href="mailto:finleyjchen@gmail.com">
      <IoIosMail />
    </a>
    <a className="mh2 mh3-l dim link" href="https://github.com/inlorfaze">
      <IoLogoGithub />
    </a>
    <a
      className="mh2 mh3-l dim link"
      href="https://www.linkedin.com/in/finleychen/"
    >
      <IoLogoLinkedin />
    </a>
    <a className="mh2 mh3-l dim link" href="https://twitter.com/finleychen">
      <IoLogoTwitter />
    </a>
  </div>
)

export default SocialLinks
