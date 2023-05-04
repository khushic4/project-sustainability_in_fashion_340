import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const prices = {
    Low: 'L',
    Medium: 'M',
    High: 'H',
    All: 'A'
}

const PricesDropDown = (callback) => {
    return (
        <DropdownButton id="dropdown-basic-button" title="Price">
            <Dropdown.Item onClick={() => callback(prices.All)}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => callback(prices.Low)}>Low</Dropdown.Item>
            <Dropdown.Item onClick={() => callback(prices.Medium)}>Medium</Dropdown.Item>
            <Dropdown.Item onClick={() => callback(prices.High)}>High</Dropdown.Item>
        </DropdownButton>
    );
}

export function Brands(props) {
    const { state } = useLocation();
    const [price, setPrice] = useState(prices.All)
    const { categoryName } = state; // Read values passed on state
    console.log(price)

    const onPriceFilterClick = (price) => {
        setPrice(price)
    }

    return (
        <div className="category-wrapper">
            <div className="category-name">
                <h1 style={{ margin: "1em" }}>{categoryName} {PricesDropDown(onPriceFilterClick)}</h1> 
            </div>
            <div className="brand">
                {getBrandCards(props.brandData, categoryName)}
            </div>
        </div>
    )
}

const getBrandCards = (brandData, category) => brandData.filter(
    brand => (brand.category === category))
    .filter(brand => (price === prices.All || (brand.price === price)))
    .map((brand) => {
    return (
        <div className="brand-container">
            <img className="brand-image" src={brand.img} alt={brand.name} />
            <div className="brand-middle">
                <p>{brand.description}</p>
                <Link to={brand.link} target="_blank">
                    <div className="brand-text">shop now</div>
                </Link>
            </div>
        </div>
    );
});



