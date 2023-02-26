import React from 'react';
import Category from './Category.js'

function BrandCard(props) {
    const { brandData } = props;
    const {name, category, description, link} = brandData;

    return (
        <div className="brand-container">
                <img className="brand-image" src={brandData.img} alt={name}/>
                <div className="brand-middle">
                    <p>{brandData.description}</p>
                    <a href={brandData.link} target="_blank">
                        <div className="brand-text">shop now</div>
                    </a>
                </div>
            </div>
    );
}

export function BrandList(props) {
    const { brands, brandData } = props;
    const brandCards = brands.map((brand) => {
        return (
            <BrandCard key={brand.id} brandData={brand}/>
        );
    });

    return (
        <div>
            <h1 style={{ margin: "2em" }}>{brandData.category}</h1>
            <div className="brand">
                {brandCards}
            </div>
        </div>
    )
}




  