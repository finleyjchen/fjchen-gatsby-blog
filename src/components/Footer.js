import React, { useState, Fragment } from 'react'
import { IoIosHeart } from 'react-icons/io'
import { GiOasis } from 'react-icons/gi'
const Footer = () => (
  <footer className="db tc">
    <GiOasis className="tc f2-ns f3" />
    <small className="db">&copy; Finley Chen</small>
    <small className="db">
      Crafted with <a href="https://www.gatsbyjs.org/">Gatsby</a> and{' '}
      <a href="http://tachyons.io">Tachyons</a> with <IoIosHeart /> in San Luis
      Obispo
    </small>
  </footer>
)

export default Footer
