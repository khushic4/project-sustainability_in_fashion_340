import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BRANDS } from '../data/brandinfo';

const prices = {
    Low: 'S',
    Medium: 'M',
    High: 'L',
    All: 'A'
}

export function Brands() {
    const {state} = useLocation();
    const {price, setPrice} = useState<prices>(prices.All)
    const { categoryName } = state; // Read values passed on state

    const onPriceFilterClick = () => {
        setPrice(prices.High)
    }
    const brandCards = (category) => BRANDS.filter(brand => (brand.category == category && (price == prices.All || brand.price == price))).map((brand) => {
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
            <button onClick = {onPriceFilterClick} > Set Price Filter</button>
            <div className="brand">
                {brandCards(categoryName)}
            </div>
        </div>
    )
}




  