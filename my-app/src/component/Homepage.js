import React from 'react';
import { useNavigate } from 'react-router-dom';

import STYLE_CATEGORIES from '../data/stylecategories.json'

export function HomePage(props) {
    return (
        <div>
            <StyleCategories applyFilterCallback={props.applyFilterCallback} />
        </div>
    )

}

function StyleCategories(props) {

    const navigate = useNavigate();

    const handleSubmit = (event, prop) => {
       props.applyFilterCallback(prop); 
       navigate('/BrowsePage');
    }

    const categories = STYLE_CATEGORIES.map((categories) => {
        return (
            <div className="home-card" type="button" key={STYLE_CATEGORIES.title}>
                <div className="category-link" onClick={(event) => handleSubmit(event, STYLE_CATEGORIES.category)} >
                    <img src={STYLE_CATEGORIES.img} />
                    <h3>{STYLE_CATEGORIES.title}</h3> 
                </div>
            </div>
        );
    });

    return (
        <main>
            <h1 style={{ margin: "2em" }}>shop by style category</h1>
            <div className="style">
                <div className="style-container">
                    {categories}
                </div>
            </div>
        </main>
    )
}


