import React from 'react'
import youngfinley from './youngfinley-min.jpg'
const About = () => (
  <div className="lh-copy">
    <h1 className="lh-title tc">About me</h1>
    <div className="tc">
      <img
        className="br-100 pa1 ba b--black-10 mw5"
        src={youngfinley}
        alt="finley chen"
      />
      <p className="f7 ma0 i">Finley and his Dad, 2001</p>
    </div>
    <p className=" f3-l f4">
      I’m a freelance web developer who specializes in WordPress. I create
      functional, fast and responsive websites optimized for search engines.
    </p>
    <div className="tc" />
    <p>
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
    </p>
    <ul>
      <li>
        <em>CMS: </em> <a href="https://wordpress.org">WordPress</a>,{' '}
        <a href="https://netlifycms.org">NetlifyCMS</a>
      </li>
      <li>
        <em>OS: Windows, Unix (Arch)</em>
      </li>
      <li>
        <em>Local development server: </em>
        <a href="https://www.apachefriends.org">XAMPP</a>,{' '}
        <a href="https://getflywheel.com">FlyWheel</a>
      </li>
      <li>
        <em>Text Editor: </em>
        <a href="https://code.visualstudio.com/">VS Code</a>
      </li>
      <li>
        <em>Font: </em>
        <a href="https://github.com/tonsky/FiraCode">Fira Code</a>
      </li>
      <li>
        <em>Terminal: </em>
        <a href="https://hyper.is/">Hyper</a>
      </li>
      <li>
        Currently learning: React, Redux, Next.js, Gatsby, Gutenberg, Ruby on
        Rails
      </li>
    </ul>
    Not that it means much, but I pride myself in achieving Challenger (top 200
    in North America) in the ever-popular video game League of Legends. I’m
    actually working on a website to provide statistics and helpful guides for
    the game character I play – Gangplank.
  </div>
)

export default About
