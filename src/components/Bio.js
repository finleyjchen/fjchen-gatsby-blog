import React from 'react'
import profileImg from './profile-img.jpg'
import { Link } from 'gatsby'
import SocialLinks from './SocialLinks'
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
      <article className="bio bg-gray-200 max-w-xl p-4 my-4">
        {/* <img className="profile-img" src={profileImg} alt='finley chen photo' /> */}
        <h3 className="text-xl ">About The Author</h3>
        <p className="">
          Hi there, my name is Finley. I’m a freelance web developer who
          specializes in WordPress and Woocommerce. Hire me to create
          functional, fast and responsive websites optimized for search engines.
        </p>

        <SocialLinks />
      </article>
    )
  }
}

export default Bio
