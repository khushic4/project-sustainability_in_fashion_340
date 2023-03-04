import React from 'react';
import BRAND_INFO from './brandinfo.js'
import { useParams } from 'react-router-dom';
import _ from 'lodash';

export function BrandCard(props) {
    const { brandData } = props;
    //const {name, img, price, description, link} = brandData;
    const { brandName } = useParams(); //REPLACE THIS WITH CORRECT VALUE

    //pretend we loaded external data    
    let brand =  _.find(BRAND_INFO, {name: brandName}); //find brand in data

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
}






  