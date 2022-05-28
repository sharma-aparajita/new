import React from "react";
import { Link } from "react-router-dom";
import '../styles/topBar.css';


export default function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <i className=" topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>

      <div className="topCenter">
        <ul className="topUl">
          <li className="topListItem">
            <Link exact to="/" className="link">HOME</Link>
          </li>
          <li className="topListItem">
          <Link to="/" className="link">ABOUT</Link>
          </li>
          <li className="topListItem">
          <Link to="/" className="link">CONTECT</Link>
          </li>
          <li className="topListItem">
          <Link to="/write" className="link">WRITE</Link>
          </li>
          <li className="topListItem">
          <Link to="/" className="link">{user && "LOGOUT" }</Link>
          </li>

        </ul>
      </div>
      <div className="topRight">{
        user?(
        <img className="topImg" src="https://images.pexels.com/photos/1130625/pexels-photo-1130625.jpeg?cs=srgb&dl=pexels-vinicius-wiesehofer-1130625.jpg&fm=jpg" alt="" />
         ):(<ul className="topUl">
           <li className="topListItem">
           <Link className="link" to="/login">LOGIN</Link>
           </li>
          <li className="topListItem">
          <Link className="link" to="/register">REGISTER</Link>
          </li>
        </ul>) }
        <i className="topSearch fa-solid fa-magnifying-glass"></i>
      </div>

    </div>
  )
}