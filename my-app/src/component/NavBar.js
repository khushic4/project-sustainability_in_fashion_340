import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';



export function NavBar() {

    const menuIcon = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.navbar');

    const [menuVisibility, setMenuVisibility] = useState(false);

    const handleClick = () => {
        setMenuVisibility(!menuVisibility);
        //if(menuVisibility == )
    }

    return (
        <header className="navbar-bg">
            <nav>
                <button onClick={handleClick} className="hamburger-menu"><i aria-label="menu"></i>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>

            <div className="navbar">
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
                        <Link to="index.html">home</Link>
                    </li>
                    <li>
                        <Link to="items.html">items</Link>
                    </li>
                    <li>
                        <Link to="about.html">about us</Link>
                    </li>
                </ul>
            </div>
            </nav>
        </header>
      
    );
}
