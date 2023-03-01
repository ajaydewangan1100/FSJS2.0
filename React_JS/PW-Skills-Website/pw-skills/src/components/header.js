
import pwskillslogo from "../assets_PW/PWSkills-main.png";
import searchIcon from "../assets_PW/search-icon.svg";

import { Link } from "react-router-dom";

import "./header.css";

function Header() {
    return ( 
        <div className="header">
            <div className="logo-and-serach">            
                <div className="logo-div">
                    <img src={pwskillslogo} className="logo-img" alt="Header-logo"></img>
                </div>
                <div className="search-field">
                    <img src={searchIcon} className="search-icon"></img>
                    <input className="serach-box" placeholder="What do you want to learn?"></input>
                </div>
                <button className="login-btn">Login / Register</button>
            </div>
            <ul className="header-navbar">
                <li> 
                    <Link to="/">HOME</Link> </li>
                <li> 
                    <Link to="/about">About Us</Link> </li>
                <li> 
                    <Link to="/contact">Contact Us</Link> </li>
                <li>Experience Portal</li>
                <li>Become an Affiliate</li>
                <li>Hall of fame</li>
                <li>More <i className="fa-solid fa-angle-down"></i></li>
            </ul>
        </div>
    );
}

export default Header;