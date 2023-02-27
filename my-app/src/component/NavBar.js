import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';



export function NavBar() {

    const menuIcon = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.navbar');
    const navigate = useNavigate()

    const [menuVisibility, setMenuVisibility] = useState(false);

    const handleHamburgerClick = () => {
        setMenuVisibility(!menuVisibility);
        console.log("I have been clicked");
    }
    const handleFunction = (route) => {
        const handleButtonClick = () => {
            navigate(route)
        }
        return handleButtonClick
    }
    
https://prod.liveshare.vsengsaas.visualstudio.com/join?490E05EF463C319B63C64A519F1C9AE0BF31
    return (
        <header className="navbar-bg">
            <nav>
                <button onClick={handleHamburgerClick} className="hamburger-menu"><i aria-label="menu"></i>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

            { menuVisibility && (<div className="navbar">
                <ul>
                    <li>
                        <Link to="index.html">
                        <img alt="Navigation" src="img/sitelogo.jpeg" className="logo" />
                        </Link>
                    </li>
                    <Link to="index.html">
                        <li>
                            <h1 className="name">ShopSpree</h1>
                        </li>
                    </Link>
                    </ul>
                        <Link to="index.html"></Link>
                    <ul>
                    <li>
                        <button onClick={handleFunction('/home')}> home </button>
                    </li>
                    <li>
                        <button onClick={handleFunction('/items')}> items </button>
                    </li>
                    <li>
                    <button onClick={handleFunction('/about')}> about us </button>
                    </li>
                </ul>
            </div>) }
            </nav>
        </header>
      
    );
}
