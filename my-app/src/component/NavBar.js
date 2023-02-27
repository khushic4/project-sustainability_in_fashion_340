import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";

export function NavBar(props) {

    const auth = getAuth();

    function handleClick(event) {
        signOut(auth)
            .catch(err => console.log(err));
        alert('Signing out. You will now be redirected to the home page.');
    }

    const menuIcon = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.navbar');

    const [menuVisibility, setMenuVisibility] = useState(false);

    const handleClick = () => {
        setMenuVisibility(!menuVisibility);
        if (menuVisibility)
            console.log("I have been clicked");
    }
    https://prod.liveshare.vsengsaas.visualstudio.com/join?490E05EF463C319B63C64A519F1C9AE0BF31
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
