import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { BRANDS } from '../data/brandinfo';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const prices = {
    Low: 'L',
    Medium: 'M',
    High: 'H',
    All: 'A'
}

export function Brands() {
    const {state} = useLocation();
    const [price, setPrice] = useState(prices.All)
    const { categoryName } = state; // Read values passed on state
    console.log(price)

    const onPriceFilterClick = (price) => {
        setPrice(price)
    }

    function PricesDropDown() {
        return (
          <DropdownButton id="dropdown-basic-button" title="Price">
            <Dropdown.Item onClick={() => onPriceFilterClick(prices.All)}>All</Dropdown.Item>
            <Dropdown.Item onClick={() => onPriceFilterClick(prices.Low)}>Low</Dropdown.Item>
            <Dropdown.Item onClick={() => onPriceFilterClick(prices.Medium)}>Medium</Dropdown.Item>
            <Dropdown.Item onClick={() => onPriceFilterClick(prices.High)}>High</Dropdown.Item>
          </DropdownButton>
        );
      }

    const brandCards = (category) => BRANDS.filter(brand => (brand.category === category)).filter(brand => (price === prices.All || (brand.price === price))).map((brand) => {
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
            {PricesDropDown()}
            <div className="brand">
                {brandCards(categoryName)}
            </div>
        </div>
    )
}




  