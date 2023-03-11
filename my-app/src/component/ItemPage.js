import React from 'react';
//import ITEMS from '../data/items.json';

var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://fonts.googleapis.com/css?family=Playfair+Display';
document.head.appendChild(link);

export function ItemPage(props) {
    let ITEMS = props.ITEMS;

    const pants = ITEMS.map((item) => {
        if (item.category === "pants"){
            return (
                <div className="brand-container" type="button" key={item.name}>
                    <div>
                        <img className="brand-image"src={item.img} alt={item.name}/>
                        <div className="brand-middle">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <a href={item.link} target="_blank">
                                <div className="brand-text">shop now</div>
                            </a>
                        </div>
                    </div>
                </div>
            );
        }
    });

    const outerwear = ITEMS.map((item) => {
        if (item.category === "outerwear"){
            return (
                <div className="brand-container" type="button" key={item.name}>
                    <img className="brand-image"src={item.img} alt={item.name}/>
                        <div className="brand-middle">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <a href={item.link} target="_blank">
                                <div className="brand-text">shop now</div>
                            </a>
                        </div>
                </div>
            );
        }
    }); 

    const tops = ITEMS.map((item) => {
        if (item.category === "tops"){
            return (
                <div className="brand-container" type="button" key={item.name}>
                    <img className="brand-image"src={item.img} alt={item.name}/>
                        <div className="brand-middle">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <a href={item.link} target="_blank">
                                <div className="brand-text">shop now</div>
                            </a>
                        </div>
                </div>
            );
        }
    });

    return (
        <main>
            <div className="itemsTitle">
                <h2 style={{ margin: "1em" }}>Outerwear from Sustainable Brands</h2>
                <div className="brand">
                        {outerwear}
                </div>
            </div>
            <div className="itemsTitle">
                <h2 style={{ margin: "1em" }}>Pants from Sustainable Brands</h2>
                <div className="brand">
                        {pants}
                </div>
            </div>
            <div className="itemsTitle">
                <h2 style={{ margin: "1em" }}>Tops from Sustainable Brands</h2>
                <div className="brand">
                        {tops}
                </div>
            </div>
        </main>
    )
}
