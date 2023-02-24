import React from 'react';

import { HeaderBar } from './my-app/src/HeaderBar.js';
import { NavBar } from './my-app/src/NavBar.js';
import { AboutPage } from './my-app/src/AboutPage.js';
import { Category } from './my-app/src/Category.js';
import { Brands } from './my-app/src/Brands.js';
import { Footer } from './my-app/src/footer.js';

export default function App(props) {
    return (
        <div>
        <NavBar/>
        <AboutPage/>
        <Brands brands={brandsData} />
        <Category categories={categoryData}/>
        </div>
        
    );
}