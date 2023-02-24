import React from 'react';

export function NavBar(props) {

    let navLinks;

    return (
        <nav>
            <div id="hamburger-menu"><a href="#"><i class="fa fa-bars" aria-label="menu"></i></a></div>
                <div class="navbar">
                    <ul>
                        <a><li> href="index.html" <img alt="Navigation" src="img/sitelogo.jpeg" class="logo"></img></li>
                        <li><h1 class="name">ShopSpree</h1></li></a>
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