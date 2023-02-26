import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export function NavBar() {
    return (
        <header className="navbar-bg">
            <nav>
            <div id="hamburger-menu">
                <a href="#">
                    <i className="fa fa-bars" aria-label="menu" />
                </a>
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <a href="index.html">{" "}
                        <img alt="Navigation" src="img/sitelogo.jpeg" className="logo" />
                        </a>
                    </li>
                    <a href="index.html">
                        <li>
                            <h1 className="name">ShopSpree</h1>
                        </li>
                    </a>
                    </ul>
                        <a href="index.html"></a>
                    <ul>
                    <li>
                        <a href="index.html">home</a>
                    </li>
                    <li>
                        <a href="items.html">items</a>
                    </li>
                    <li>
                        <a href="about.html">about us</a>
                    </li>
                </ul>
            </div>
            </nav>
        </header>
      
    );
}
