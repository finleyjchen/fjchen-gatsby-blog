import React from 'react'
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade'

import youngfinley from './youngfinley-min.jpg'
const About = () => (
  <div className="">
    <h1 className="text-2xl md:text-6xl font-bold my-10 md:my-20">Striving for greatness</h1>
    <div className="flex flex-col md:flex-row py-10 md:py-20">

    <div className="md:w-1/4 md:px-6 mb-6">
      <img src={youngfinley} alt="finley chen" className=""/>
      <p className="text-sm mt-3 text-center">Finley and his Dad, 2001</p>
    </div>
    <div className="md:w-3/4 flex leading-relaxed md:text-xl flex-wrap">
    <p className="md:w-1/2 md:px-6 pb-6">
      I taught myself how to develop websites for local businesses and family
      friends in high school. Since then, I've been honing my skills in both
      design and code to create quality, bespoke websites.
    </p>
    <p className="md:w-1/2 md:px-6 pb-6">
      Aside from being a web developer, I am a student at California Polytechnic
      State University studying political science. I'm interested in social
      choice thoery and political philosophy. It's a goal of mine to find a way
      to somehow bridge my interests in a fulfilling project.
    </p>


    </div>
    </div>
    {/* <p>
      I made my first website at 11 years old. Since then, I’ve been using my
      knowledge in WordPress, PHP, and of course HTML, CSS, and JavaScript to
      help businesses harness the potential of WordPress and other web
      technologies. I grew up in San Diego but now live in San Luis Obispo,
      California for school at Cal Poly.
      </p>
    <p>
      I have big dreams and ambitions. I'm enamored by the idea of solving
      issues, helping consumers - and making money in the process!
    </p>
    <h3>Improving Daily</h3>
    <p>
      There’s no question the developer world is a fast-paced, growing one.
      There are seemingly infinite new frameworks, trends, and technologies that
      keep developers like me up at night fiddling with documentation and
      testing.
    </p>
    <p>
      With the recent release of WordPress 5.0 and Gutenberg, I have been
      learning frontend skills like React and Redux, while also sharpening my
      backend skills by working with Express and NodeJS.
    </p>
    <h3>Extra</h3>
    <p>
      When I'm not developing I enjoy playing video games, eating ramen,
      writing, spending time with my girlfriend, and studying.
    </p> */}
  </div>
)

export default About
