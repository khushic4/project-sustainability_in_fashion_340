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
            <NavBar/>
            <HeaderBar />
            <Brands brands={brandsData} />
            <Category categories={categoryData}/>
            <AboutPage />
            <Footer />
        </div>
    );
}