import React from 'react';
import { Route, Routes } from 'react-router-dom';

//import { Routes, Route, Router } from 'react-router-dom';
//import { getAuth } from 'firebase/auth';

import { NavBar } from './NavBar.js';
import { AboutPage } from './AboutPage.js';
import { ItemPage } from './ItemPage.js';
import { Footer } from './Footer.js';
import { HomePage } from './Homepage.js';
import { Brands } from './Brands.js';


export default function App(props) {
    // const [] = useState([]);
    // const [] = useState([]);

    return (
        //<Router>
        <div className="page-content">
            {<NavBar />}
            <div className="route-choice">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/items" element={<ItemPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/brands" element={<Brands />} />
                    {/*}
                        <Route path="/adopt/:brandName" element={<BrandCard />} />
                        <Route index element={<BrandList brandCards={brandCards} />} />
                    </Route> */}
                </Routes>
            </div>
            <Footer />
        </div>
        //</Router>
    );
}



