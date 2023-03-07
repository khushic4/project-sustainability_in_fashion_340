import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';


export function NavBar(props) {

    const menuIcon = document.querySelector('.hamburger-menu');
    const menu = document.querySelector('.navbar');
    const navigate = useNavigate()

    const [menuVisibility, setMenuVisibility] = useState(true);

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
    
    return (
        <header className="navbar-bg">
            <nav>
            { menuVisibility && (<div className="navbar">
                <ul>
                    <li>
                        <button onClick={handleFunction('/')}>
                            <h1 className="name">ShopSpree <img alt="Navigation" src="img/sitelogo.jpeg" className="logo" /></h1>
                        </button>
                    </li>
                    </ul>
                        <Link to="index.html"></Link>
                    <ul>
                    <li>
                        <button onClick={handleFunction('/')}> home </button>
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
