import React from 'react';
import '../styles/header.css'


export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">React and node</span>
        <span className="headerTitleLg"> Blog</span>
      </div>
      <img className="imgHead" src="https://images.pexels.com/photos/1128797/pexels-photo-1128797.jpeg?cs=srgb&dl=pexels-nathan-cowley-1128797.jpg&fm=jpg" alt="" />
    </div>
  )
}
