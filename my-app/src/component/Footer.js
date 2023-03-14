import React from 'react';
import { Link, useLocation } from 'react-router-dom';


export function Footer(props) {

    return (
        <footer>
            <div className="footer-info">
                <h3>&copy;© ShopSpree</h3>
                <p>ShopSpree creates a happier yet more affordable and sustainable shopping
                    experience for young consumers.</p>
                <p>Stay up to date with all the latest trends through our socials.</p>
                <ul className="links">
                    <li>
                        <Link to="https://www.facebook.com/UWiSchool" target="_blank">
                            <i className="fa fa-facebook-f" />
                        </Link>
                    </li>
                    <li>
                        <Link to="https://www.instagram.com/uwischool/" target="_blank">
                            <i className="fa fa-instagram" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="https://twitter.com/uw_ischool?s=20&t=6g6UTfndELpQXwPyzvzTog"
                            target="_blank">
                            <i className="fa fa-twitter" />
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="copyright">
                <p>COPYRIGHT ©2022. DESIGNED BY <i>INFO 340 GROUP AA1</i></p>
            </div>
        </footer>

    );
}