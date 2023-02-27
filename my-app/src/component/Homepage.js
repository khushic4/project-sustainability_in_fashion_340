import React from 'react';
import { useNavigate } from 'react-router-dom';

import { STYLE_CATEGORIES } from '../data/stylecategories'

export function HomePage(props) {
    console.log("HERE WE ARE")
    return (
        <div>
            <StyleCategories applyFilterCallback={props.applyFilterCallback} />
        </div>
    )

}

function StyleCategories(props) {

    const navigate = useNavigate();

    const handleSubmit = (event, prop) => {
        console.log(event)
        props.applyFilterCallback(prop); 
        navigate('/BrowsePage');
    }

    const categories = STYLE_CATEGORIES.map((sustainableCategory) => {
        return (
            <div className="home-card" type="button" key={sustainableCategory.title}>
                <div className="category-link" onClick={(event) => handleSubmit(event, sustainableCategory.category)} >
                    <img src={sustainableCategory.img} />
                    <h3>{sustainableCategory.title}</h3> 
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


