import React from 'react'
import { Link } from 'gatsby'
import Fade from 'react-reveal/Fade'
import flower4 from '../assets/flower4.png'
import youngfinley from './youngfinley-min.jpg'
const About = () => (
  <div className="">
    <div className="flex flex-col md:flex-row justify-between flex-col-reverse">
          <div>

    <h1 className="text-5xl md:text-6xl font-bold my-10 md:my-20">Striving for greatness</h1>
    <p className="text-lg md:text-3xl max-w-2xl">
      Hi, I'm Finley. I'm a 19-year old front-end web developer and aspiring tech entrepreneur.     I build digital experiences with human-focused design and a focus on accessibility, semantic SEO, and speed.

    </p>
          </div>
          <div className="max-w-xs">
          </div>
          </div>

    <div className="flex flex-col md:flex-row py-10 md:py-20">


    <div className="md:w-3/4 flex leading-relaxed flex-wrap">



    <p className="md:w-1/2 md:pr-6 pb-6">
      Since high school, I have been relentlessly pursuing to learn software engineering, UX/UI design, and digital marketing, starting with local businesses and family
      friends since high school. My first position was the web developer for a local Christmas eCommerce store and landing informational page, migrating a Magento site to WordPress/WooCommerce. Through this experience I planted the seeds to expand my knowledge and skill in code and design. 
    </p>
    <p className="md:w-1/2 md:pr-6 pb-6">
      Aside from being a front-end web developer, I am a student at California Polytechnic
      State University studying political science. I'm interested in social
      choice thoery and political philosophy. It's a goal of mine to find a way
      to somehow bridge my interests in design, code, and civics in a fulfilling project.
    </p>

    <p className="md:w-1/2 md:pr-6 pb-6">
    <Link className="text-xl bg-gray-800 text-pink-200 px-4 py-3 mr-4 hover:bg-pink-200 hover:text-gray-800 inline-block" to="/work">My Work</Link>
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
