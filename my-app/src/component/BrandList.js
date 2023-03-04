import React from 'react';
import BrandCard from './BrandCard';
import { useParams } from 'react-router-dom';

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





  