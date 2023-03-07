import React from 'react';
import { useNavigate } from 'react-router-dom';
import  STYLE_CATEGORIES  from '../data/stylecategories.json'

var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css?family=Playfair+Display';
document.head.appendChild(link);

export function HomePage(props) {
    return (
        <div>
            <StyleCategories applyFilterCallback={props.applyFilterCallback} />
        </div>
    )

}

function StyleCategories(props) {

    const navigate = useNavigate();

    const handleSubmit = (categoryTitle) => {
        navigate('/brands', { state: { categoryName: categoryTitle } });
    }

    const categories = STYLE_CATEGORIES.map((category) => {
        return (
            <div className="home-card" type="button" key={category.title}>
                <div className="category-link" onClick={() => handleSubmit(category.title)} >
                    <img src={category.img} alt={category.name}/>
                    <h3>{category.title}</h3>
                </div>
            </div>
        );
    });

    return (
        <main>
            <h1 style={{ margin: "1em" }}>shop by style category</h1>
            <div className="style">
                <div className="style-container">
                    {categories}
                </div>
            </div>
        </main>
    )
}


