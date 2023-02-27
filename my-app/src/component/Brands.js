import React from 'react';
import { useLocation } from 'react-router-dom';
import { BRANDS } from '../data/brandinfo';

export function Brands() {
    const {state} = useLocation();
    const { categoryName } = state; // Read values passed on state
    const brandCards = (category) => BRANDS.filter(brand => brand.category == category).map((brand) => {
        return (
            <div className="brand-container">
                <img className="brand-image" src={brand.img} alt={brand.name}/>
                <div className="brand-middle">
                    <p>{brand.description}</p>
                    <a href={brand.link} target="_blank">
                        <div className="brand-text">shop now</div>
                    </a>
                </div>
            </div>
        );
    });

    return (
        <div>
            <h1 style={{ margin: "2em" }}>{categoryName}</h1>
            <div className="brand">
                {brandCards(categoryName)}
            </div>
        </div>
    )
}




  