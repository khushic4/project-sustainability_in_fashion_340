import React from 'react';

export function NavBar() {
    return (
        <nav>
            <div id="hamburger-menu"><a href="#"><i className="fa fa-bars" aria-label="menu"></i></a></div>
                <div className="navbar">
                    <ul>
                        <a><li> href="index.html" <img alt="Navigation" src="img/sitelogo.jpeg" className="logo"/></li>
                        <li><h1 className="name">ShopSpree</h1></li></a>
                    </ul>
                    <ul>
                        <li><a href="index.html">home</a></li>
                        <li><a href="items.html">items</a></li>
                        <li><a href="about.html">about us</a></li>
                    </ul>
            </div>
        </nav>
    );
}
