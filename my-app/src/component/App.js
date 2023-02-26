// import React, { useState } from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react';
import { NavBar } from './component/NavBar.js';
//import { AboutPage } from './component/AboutPage.js';
//import { ItemPage } from './component/Items.js';
//import { Category } from './component/Category.js';
//import { Brands } from './component/Brands.js';
//import { Footer } from './component/Footer.js';
import { Homepage } from './component/Homepage.js';

function App(props) {
    const { brandsData, categoryData } = props;

    return (
        <div>
            <NavBar/>
            <Homepage/>
        {/* <AboutPage/> */}
        {/* <Brands brands={brandsData} /> */}
        {/* <Category categories={categoryData}/> */}
        </div>
    );
}

export default App;