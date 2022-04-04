import React from 'react';
import '../styles/sideBar.css'

export default function SideBar() {
  return (
              <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className='sideBarItem'>
         <span className="sideBarTitle">CATEGORIES</span>
         <ul className="sideBar">
           <li className="sideBarListItem">List Style</li>
           <li className="sideBarListItem">Music</li>
           <li className="sideBarListItem">Soprts</li>
           <li className="sideBarListItem">Technologies</li>
           <li className="sideBarListItem">Cinemas</li>
           <li className="sideBarListItem">Science</li>
         </ul>

      </div>

      <div className="sideBarItem">
        <span className="sideBarTitle">Follow Us</span>
        <div className="sideBarSocial">
          <i className=" sideBarIcon fa-brands fa-facebook-square"></i>
          <i className="sideBarIcon fa-brands fa-twitter-square"></i>
          <i className="sideBarIcon fa-brands fa-pinterest-square"></i>
          <i className="sideBarIcon fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  )
}
