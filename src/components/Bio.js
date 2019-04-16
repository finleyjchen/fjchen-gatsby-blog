import React from 'react'
import profileImg from './profile-img.jpg'
import github from '../assets/github.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import mail from '../assets/mail.svg'
import cover from '../assets/cover.png'
import cover3 from '../assets/Surrealist-Lightbulb.gif'
import {
  IoIosSpeedometer,
  IoIosMail,
  IoLogoTwitter,
  IoLogoTwitch,
  IoLogoGithub,
  IoLogoLinkedin,
} from 'react-icons/io'
class Bio extends React.Component {
  render() {
    return (
      <div className="bio  ">
        {/* <img className="profile-img" src={profileImg} alt='finley chen photo' /> */}
        <div className="dtc v-mid ">
          <p className="f3 f1-ns fw4 lh-headline mb0">
            Websites built to grow.
          </p>
          <p className="f2-ns lh-copy fw3 mt0">
            Speed, accessibility, and SEO.
          </p>
        </div>
        <div className="dtc tc v-mid">
          <img src={cover3} alt="cover image" className="mw5-ns mw4" />
        </div>

        <p className="mt5-ns f4-ns lh-copy mb4">
          Hi, my name is Finley. I’m a freelance web developer who specializes
          in WordPress. Hire me to create functional, fast and responsive
          websites optimized for search engines.
        </p>
        <div className="social-links mb4 f2 tc tl-ns">
          <a
            className="mh2 mr3-l ml0-l dim link"
            href="mailto:finleyjchen@gmail.com"
          >
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
          <a
            className="mh2 mh3-l dim link"
            href="https://twitter.com/finleychen"
          >
            <IoLogoTwitter />
          </a>
        </div>
      </div>
    )
  }
}

export default Bio
