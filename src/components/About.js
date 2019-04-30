import React from 'react'
import { Link } from 'gatsby'

import youngfinley from './youngfinley-min.jpg'
const About = () => (
  <div className="lh-copy measure-wide center">
    <h1 className="f1-ns fw5 f2 lh-title tc">Striving for greatness</h1>
    <div className="tc">
      <img src={youngfinley} alt="finley chen" />
      <p className="f7 ma0 i">Finley and his Dad, 2001</p>
    </div>
    <p className="lh-copy f4">
      Aside from being a web developer, I am a student at California Polytechnic
      State University studying political science.
    </p>
    <p className="lh-copy f4">
      Things like social choice theory and political philosophy greatly interest
      me. It's a goal of mine to find a way to bridge my interests in a
      fulfilling project.
    </p>

    <p className="lh-copy f4">
      I love playing video games. Sometimes I{' '}
      <a href="https://twitch.tv/inlorfaze">stream on Twitch</a>.
    </p>
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
    <p>
      <Link to={'/uses'}>Uses</Link>
    </p>
  </div>
)

export default About
