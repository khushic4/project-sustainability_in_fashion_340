import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BRANDS } from '../data/brandinfo';

export function Brands(category) {

    const brandCards = (category) => BRANDS.map((brand) => {
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
            <h1 style={{ margin: "2em" }}>{category}</h1>
            <div className="brand">
                {brandCards(category)}
            </div>
        </div>
    )
}




  