import React from 'react'

// Import typefaces


import profileImg from './profile-img.jpg'

class Author extends React.Component {
  render() {
    return (
      <div className="author">
        <img className="profile-img" src={profileImg} alt='finley chen photo' />
        <p>
        Hi, my name is <strong>Finley Chen</strong>. Thanks for visiting my website.
  
            I'm a web developer in San Luis Obispo, California. My day usually consists of developing, school, and ramen.
        </p>
        <div className="social-links">
          <a href="mailto:finleyjchen@gmail.com">
            Email
          </a>
          <a href="https://github.com/inlorfaze">
            Github
          </a>
          <a href="https://www.linkedin.com/in/finleychen/" >
            LinkedIn
          </a>
          <a href="https://twitter.com/finleychen">
            Twitter
          </a>
        </div>
      </div>

    )
  }
}

export default Author
