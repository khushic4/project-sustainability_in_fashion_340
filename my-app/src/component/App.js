import React from 'react';

import { HeaderBar } from './HeaderBar.js';
import { NavBar } from './NavBar.js';
import { AboutPage } from './AboutPage.js';
import { Category } from './Category.js';
import { Brands } from './Brands.js';
import { Footer } from './Footer.js';


export default function App(props) {
    const { brandsData, categoryData } = props;

    return (
        <div>
<<<<<<< HEAD
        <NavBar/>
        <AboutPage/>
        <Brands brands={brandsData} />
        <Category categories={categoryData}/>
=======
            <NavBar/>
            <HeaderBar />
            <Brands brands={brandsData} />
            <Category categories={categoryData}/>
            <AboutPage />
            <Footer />
>>>>>>> 9c1a275eb2abba879e864acf0aed5810c541f872
        </div>
    );
}