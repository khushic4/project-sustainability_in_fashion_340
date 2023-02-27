import React from 'react';

export function ItemPage() {
    return (
        <>
        <main>
            <div className="subcategoryTitle">
                <h2 style={{ margin: "2em" }}>Outerwear from Sustainable Brands</h2>
             </div>
            <div className="brand">
                {/* brand 1*/}
                <div className="brand-container">
                    <img alt="Girlfriend Collective" className="brand-image" src="../img/girlfriendcollective.jpg"/>
                    <div className="brand-middle">
                        <p>Outerwear from Girlfriend Collective.</p>
                        <a href="https://girlfriend.com/collections/outerwear" target="_blank">
                            <div className="brand-text">Shop Now</div>
                        </a>
                    </div>
                </div>
                {/* brand 2 */}
                <div className="brand-container">
                    <img alt="Outdoor Voices" className="brand-image" src="img/OutdoorVoices.png"/>
                    <div className="brand-middle">
                        <p>Outerwear from Outdoor Voices.</p>
                        <a href="https://www.outdoorvoices.com/collections/w-jackets"
                        target="_blank">
                        <div className="brand-text">Shop Now</div>
                        </a>
                    </div>
                </div>
                {/* brand 3 */}
                <div className="brand-container">
                    <img alt="Reformation" className="brand-image" src="img/reformation.png"/>
                    <div className="brand-middle">
                        <p>Outerwear from Reformation.</p>
                        <a href="https://www.thereformation.com/search?q=outerwear&lang=default" target="_blank">
                            <div className="brand-text">Shop Now</div>
                        </a>
                    </div>
                </div>
                {/* brand 4 */}
                <div className="brand-container">
                    <img alt="Patagonia" className="brand-image" src="img/patagonia.png" />
                    <div className="brand-middle">
                        <p>Outerwear from Patagonia.</p>
                        <a href="https://www.patagonia.com/shop/outerwear" target="_blank">
                            <div className="brand-text">Shop Now</div>
                        </a>
                    </div>
                </div>
            </div>
        </main>

        <main>
            <div className="subcategoryTitle">
                <h2 style={{ margin: "2em" }}>Pants from Sustainable Brands</h2>
            </div>
            <div className="brand">
                {/* brand 1*/}
                <div className="brand-container">
                    <img alt="Bamford" className="brand-image" src="img/bamford.png" />
                    <div className="brand-middle">
                        <p>Pants from Bamford.</p>
                        <a href="https://www.bamford.com/catalogsearch/result/?q=pants" target="_blank">
                            <div className="brand-text">Shop Now</div>
                        </a>
                    </div>
                </div>
                {/* brand 2 */}
                <div className="brand-container">
                    <img alt="Harvest and Mill" className="brand-image" src="img/harvest.png"/>
                    <div className="brand-middle">
                        <p>Pants from Harvest and Mill.</p>
                        <a href="https://harvestandmill.com/search?options%5Bprefix%5D=last&page=2&q=pants" target="_blank">
                            <div className="brand-text">Shop Now</div>
                        </a>
                    </div>
                </div>
                {/* brand 3 */}
                <div className="brand-container">
                    <img alt="Toad&Co" className="brand-image" src="img/Toad.png"/>
                    <div className="brand-middle">
                        <p>Pants from Toad&amp;Co.</p>
                        <a href="https://www.toadandco.com/search?q=pants&view=shop" target="_blank">
                            <div className="brand-text">Shop Now</div>
                        </a>
                    </div>
                </div>
                {/* brand 4 */}
                <div className="brand-container">
                    <img alt="Amour Vert" className="brand-image" src="img/Amour.png" />
                    <div className="brand-middle">
                        <p>Pants from Amour Vert.</p>
                        <a href="https://amourvert.com/search?q=pants" target="_blank">
                            <div className="brand-text">Shop Now</div>
                        </a>
                    </div>
                </div>
            </div>
        </main>

        <main>
            <div className="subcategoryTitle">
                <h2 style={{ margin: "2em" }}>Tops from Sustainable Brands</h2>
            </div>
            <div className="brand">
                {/* brand 1*/}
                <div className="brand-container">
                    <img alt="Everlane" className="brand-image" src="img/everlaneitems.png"/>
                    <div className="brand-middle">
                        <p>Tops from Everlane.</p>
                        <a href="https://www.everlane.com/search?q=tops" target="_blank">
                            <div className="brand-text">Shop Now</div>
                        </a>
                    </div>
                </div>
                {/* brand 2 */}
                <div className="brand-container">
                    <img alt="TenTree" className="brand-image" src="img/tentreeitems.png"/>
                    <div className="brand-middle">
                        <p>Tops from TenTree.</p>
                        <a href="https://www.tentree.com/?utm_campaign=fairtrade-clothing&utm_medium=affiliate&utm_source=thegoodtrade" target="_blank">
                            <div className="brand-text">Shop Now</div>
                        </a>
                    </div>
                </div>
                {/* brand 3 */}
                <div className="brand-container">
                    <img alt="For Days" className="brand-image" src="img/fordays.png" />
                    <div className="brand-middle">
                        <p>Tops from For Days.</p>
                        <a href="https://fordays.com/search?type=product%2Cpage&q=tops*" target="_blank">
                            <div className="brand-text">Shop Now</div>
                        </a>
                    </div>
                </div>
                {/* brand 4 */}
                <div className="brand-container">
                    <img alt="Whimsy&Row" className="brand-image" src="img/Whimsy&Row.png"/>
                    <div className="brand-middle">
                        <p>Tops from Whimsy&amp;Row.</p>
                        <a href="https://whimsyandrow.com/search?type=product&q=tops" target="_blank">
                            <div className="brand-text">Shop Now</div>
                        </a>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}
