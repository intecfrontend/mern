import React from 'react'
import pineapple from "./pics/ana.jpg"


function Post() {
  return (
    <div className="post">
      <div className="image">
        <img src={pineapple} alt="pineapple" />
      </div>
      <div className="texts">
        <h2>Full house battery</h2>
        <p className="info">
          <a className="author">Dawid Paszko</a>
          <time>2023-01-06 16:45</time></p>
        <p className="summary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, similique.</p>
      </div>
    </div>
  )
}

export default Post