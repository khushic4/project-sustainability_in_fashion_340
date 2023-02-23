import React from 'react';

export function NavBar() {
    return (
        <header>
            <div className="navbar-bg">
                <nav>
                    <div id="hamburger-menu"><a href="#"><i class="fa fa-bars" aria-label="menu"></i></a></div>
                    <div className="navbar">
                        <ul>
                            <li><a href="index.html"> <img alt="Navigation" src="img/sitelogo.jpeg" class="logo"></li>
                            <li><h1 class="name">ShopSpree</h1></li>
                        </ul>
                        </a>
                        <ul>
                            <li><a href="index.html">home</a></li>
                            <li><a href="items.html">items</a></li>
                            <li><a href="about.html">about us</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}