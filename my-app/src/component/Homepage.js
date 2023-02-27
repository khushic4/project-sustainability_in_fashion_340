import React from 'react';
import { useNavigate } from 'react-router-dom';

import { STYLE_CATEGORIES } from '../data/stylecategories'

export function HomePage(props) {
    return (
        <div>
            <StyleCategories applyFilterCallback={props.applyFilterCallback} />
        </div>
    )

}

function StyleCategories(props) {

    const navigate = useNavigate();

    const handleSubmit = (event, categoryTitle) => {
        console.log(event)
        navigate('/brands', { state: { categoryName: categoryTitle } });
    }

    const categories = STYLE_CATEGORIES.map((category) => {
        return (
            <div className="home-card" type="button" key={category.title}>
                <div className="category-link" onClick={(event) => handleSubmit(event, category.title)} >
                    <img src={category.img} />
                    <h3>{category.title}</h3> 
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


