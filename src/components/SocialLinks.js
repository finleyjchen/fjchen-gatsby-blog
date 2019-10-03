import React from 'react'
import Fade from 'react-reveal/Fade'

import {
  IoIosSpeedometer,
  IoIosMail,
  IoLogoTwitter,
  IoLogoTwitch,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io'
const SocialLinks = () => (
  <div className="social-links text-3xl mt-3 flex justify-between max-w-xs md:justify-start">
    <a className="text-gray-800 hover:text-gray-900 mx-1" href="mailto:finleyjchen@gmail.com">
      <IoIosMail />
    </a>
    <a className="text-gray-800 hover:text-gray-900 mx-1" href="https://github.com/inlorfaze">
      <IoLogoGithub />
    </a>
    <a
      className="text-gray-800 hover:text-gray-900 mx-1"
      href="https://www.linkedin.com/in/finleychen/"
      >
      <IoLogoLinkedin />
    </a>
    <a className="text-gray-800 hover:text-gray-900 mx-1" href="https://twitter.com/finleychen">
      <IoLogoTwitter />
    </a>
  </div>
)

export default SocialLinks
