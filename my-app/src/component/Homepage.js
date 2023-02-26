import React from 'react';

export function Homepage() {
    return (
        <main>
            <h1 style={{ margin: "2em" }}>shop by style category</h1>
            <div className="style">
                <div className="style-container">
                    <a href="casual.html">
                    <img src="img/casualeveryday.jpg" alt="Casual Everyday" />
                    <p>Casual, Everyday Wear</p>
                    </a>
                </div>
                <div className="style-container">
                    <a href="nightOut.html">
                        <img src="img/nightout.jpg" alt="Going Out" />
                        <p>Night Out</p>
                    </a>
                </div>
                <div className="style-container">
                    <a href="businesscas.html">
                        <img src="img/businesscasual.jpg" alt="Business Casual" />
                        <p>Business Casual Office Wear</p>
                    </a>
                </div>
                <div className="style-container">
                    <a href="Athleisure.html">
                        <img src="img/athleisure.jpg" alt="Athleisure" />
                        <p>Athleisure and Athletic Clothing</p>
                    </a>
                </div>
                <div className="style-container">
                    <a href="formal.html">
                        <img src="img/formal.jpg" alt="Formal Wear" />
                        <p>Formal Wear</p>
                    </a>
                </div>
                <div className="style-container">
                    <a href="intimates.html">
                        <img src="img/intimates.jpg" alt="Intimates" />
                        <p>Intimates</p>
                    </a>
                </div>
                <div className="style-container">
                    <a href="beachwear.html">
                        <img src="img/vacation.jpg" alt="Vacation" />
                        <p>Beach and Vacation Wear</p>
                    </a>
                </div>
                <div className="style-container">
                    <a href="accessories.html">
                        <img src="img/accessories.jpg" alt="Accessories" />
                        <p>Accessories</p>
                    </a>
                </div>
            </div>
    </main>
 
    )

}