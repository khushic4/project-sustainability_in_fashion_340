import React from 'react';

export function footer(props) {

    return (
        <footer>
            <div className="footerInfo">
                <h3>&copy; ShopSpree</h3>
                <p>ShopSpree creates a happier yet more affordable and sustainable shopping experience for young consumers.
                </p>
                <p>Stay up to date with all the latest trends through our socials.</p>
                <ul class="links">
                    <li><a href="https://www.facebook.com/UWiSchool" target="_blank"><i class="fa fa-facebook-f"></i></a>
                    </li>
                    <li><a href="https://www.instagram.com/uwischool/" target="_blank"><i class="fa fa-instagram"></i></a>
                    </li>
                    <li><a href="https://twitter.com/uw_ischool?s=20&t=6g6UTfndELpQXwPyzvzTog" target="_blank"><i
                                class="fa fa-twitter"></i></a></li>
                </ul>
            </div>
            <div className="copyright">
                <p>COPYRIGHT &copy;2022. DESIGNED BY <i>INFO 340 GROUP AA1</i></p>
            </div>
        </footer>
    );
}