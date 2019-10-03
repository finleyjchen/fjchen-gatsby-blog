import React, { useState, Fragment } from 'react'
import { IoIosHeart } from 'react-icons/io'
import { GiOasis } from 'react-icons/gi'
import SocialLinks from './SocialLinks'
const Footer = () => (
  <footer className="w-full px-3 md:px-6 my-10 md:my-20 container mx-auto justify-between flex flex-col sm:flex-row items-center text-center text-xs">
    <p className="font-bold">&copy; Finley Chen</p>
    <p className="footer-links">
      Crafted with {" "}
      <a href="https://www.gatsbyjs.org/">Gatsby</a>{" "} & {" "} <a href="https://tailwindcss.com">Tailwind</a> with <IoIosHeart className="inline-block" /> in San Luis Obispo
    </p>        
    <SocialLinks />

  </footer>
)

export default Footer
