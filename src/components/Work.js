import React from 'react'
import { FiMapPin } from 'react-icons/fi'
import { IoMdHourglass } from 'react-icons/io'
import ycs from '../assets/yourchristmasstore-work-min.png'
import calpoly from '../assets/Cal-poly-work-min.png'
import colonymedia from '../assets/colony-media-work-min.png'
const Work = () => (
  <div>
    <h1>Work</h1>
    <div className="post">
      <h3>
        <a href="https://calpoly.edu" className="post-link">
          California Polytechnic University
        </a>
      </h3>
      <p className="f6 lh-copy ma0">
        <FiMapPin /> San Luis Obispo, CA
      </p>
      <p className="f6 lh-copy ma0">
        <IoMdHourglass />
        January 2019 – Present
      </p>

      <p>
        Student assistant frontend web developer for Cal Poly's Administration &
        Finance Department.
      </p>
    </div>
    <div className="post">
      <h3>
        <a href="https://colonymedia.us" className="post-link">
          Colony Media
        </a>
      </h3>
      <p className="f6 lh-copy ma0">
        <FiMapPin /> San Luis Obispo, CA
      </p>
      <p className="f6 lh-copy ma0">
        <IoMdHourglass />
        May 2018 – Present
      </p>

      <p>
        Completing WordPress website work contracts, maintenance and server
        management for 10+ websites.
      </p>
    </div>
    <div className="post">
      <h3>
        <a href="https://yourchristmasstore.com" className="post-link">
          Canterbury Gardens & Gifts
        </a>
      </h3>
      <p className="f6 lh-copy ma0">
        <FiMapPin /> San Diego, CA
      </p>
      <p className="f6 lh-copy ma0">
        <IoMdHourglass />
        April 2016 – Present
      </p>
      <p>
        Creating a new WP/WooCommerce website with 2000+ products, managing
        eCommerce database entries and batch product uploads, doing SEO work,
        and managing orders, shipments, and invoices.
      </p>
    </div>
    <div className="post">
      <h3>
        <span className="post-link">Freelance web developer</span>
      </h3>
      <p className="f6 lh-copy ma0">
        <FiMapPin /> Remote
      </p>
      <p className="f6 lh-copy ma0">
        <IoMdHourglass />
        January 2017 – Present
      </p>
      <p>
        Creating pure HTML/CSS/JS websites, WordPress websites (vanilla
        WordPress and Genesis Framework), custom child theme development, and
        custom WordPress plugin development. Also doing SEO work to increase
        websites’ online web presence.
      </p>
    </div>
  </div>
)

export default Work
