// import React, { useState } from 'react';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react';
import { HeaderBar } from './component/HeaderBar.js';
import { NavBar } from './component/NavBar.js';
import { AboutPage } from './component/AboutPage.js';
//import { Category } from './component/Category.js';
//import { Brands } from './component/Brands.js';
import { Footer } from './component/Footer.js';

function App(props) {
    const { brandsData, categoryData } = props;

    return (
        <div>
        <NavBar/>
        <AboutPage/>
        {/* <Brands brands={brandsData} /> */}
        {/* <Category categories={categoryData}/> */}
        </div>
    );
}

export default App;