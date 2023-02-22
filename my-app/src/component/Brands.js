import React from 'react';

const brandsData = [
    {
        name: 'Everlane',
        category: 'Casual, Everyday Wear',
    },
    {
        name: 'Tamga Designs',
        category: 'Casual, Everyday Wear',
    },
    {
        name: 'Wearwell',
        category: 'Casual, Everyday Wear',
    },
    {
        name: 'Tentree',
        category: 'Casual, Everyday Wear',
    },
    {
        name: 'Hanna Anderson',
        category: 'Casual, Everyday Wear',
    },
    {
        name: 'Able',
        category: 'Casual, Everyday Wear',
    },
    {
        name: 'Reformation',
        category: 'Night Out',
    },
    {
        name: 'Vetta',
        category: 'Night Out',
    },
    {
        name: 'Milk and Thistle',
        category: 'Night Out',
    },
    {
        name: 'Silk Laundry',
        category: 'Night Out',
    },
    {
        name: 'Kowtow',
        category: 'Night Out',
    },
    {
        name: 'Greedy Lui',
        category: 'Night Out',
    },
    {
        name: 'Eileen Fisher',
        category: 'Business Casual Office Wear',
    },
    {
        name: 'Vetta',
        category: 'Business Casual Office Wear',
    },
    {
        name: 'Sezane',
        category: 'Business Casual Office Wear',
    },
    {
        name: 'thought',
        category: 'Business Casual Office Wear',
    },
    {
        name: 'Tradlands',
        category: 'Business Casual Office Wear',
    },
    {
        name: 'Aday',
        category: 'Business Casual Office Wear',
    },
    {
        name: 'girlfriend collective',
        category: 'Athleisure and Athletic Clothingt',
    },
    {
        name: 'Outdoor Voices',
        category: 'Athleisure and Athletic Clothing',
    },
    {
        name: 'Reformation',
        category: 'Athleisure and Athletic Clothing',
    },
    {
        name: 'Patagonia',
        category: 'Athleisure and Athletic Clothing',
    },
    {
        name: 'alo',
        category: 'Athleisure and Athletic Clothing',
    },
    {
        name: 'T/ALA',
        category: 'Athleisure and Athletic Clothing',
    },
    {
        name: 'Whimsey Androw',
        category: 'Formal Wear',
    },
    {
        name: 'Amour Vert',
        category: 'Formal Wear',
    },
    {
        name: 'Christy Dawn',
        category: 'Formal Wear',
    },
    {
        name: 'Made Trade',
        category: 'Formal Wear',
    },
    {
        name: 'Stella McCartney',
        category: 'Formal Wear',
    },
    {
        name: 'Transcend',
        category: 'Formal Wear',
    },
    {
        name: 'Victorias Secret',
        category: 'Intimates',
    },
    {
        name: 'Curvy Kate',
        category: 'Intimates',
    },
    {
        name: 'Honey Love',
        category: 'Intimates',
    },
    {
        name: 'Leilani Lingerie',
        category: 'Intimates',
    },
    {
        name: 'Ralph Lauren',
        category: 'Intimates',
    },
    {
        name: 'Spanx',
        category: 'Intimates',
    },
    {
        name: 'Matteau',
        category: 'Beach and Vacation Wear',
    },
    {
        name: 'Fisch',
        category: 'Beach and Vacation Wear',
    },
    {
        name: 'Peony',
        category: 'Beach and Vacation Wear',
    },
    {
        name: 'Medina',
        category: 'Beach and Vacation Wear',
    },
    {
        name: 'Casaraki',
        category: 'Beach and Vacation Wear',
    },
    {
        name: 'Frankies',
        category: 'Beach and Vacation Wear',
    },
    {
        name: 'Kate Spade',
        category: 'Accessories',
    },
    {
        name: 'Steve Madden',
        category: 'Accessories',
    },
    {
        name: 'Francescas',
        category: 'Accessories',
    },
    {
        name: 'Kitsch',
        category: 'Accessories',
    },
    {
        name: 'Louis Vuitton',
        category: 'Accessories',
    },
    {
        name: 'Braceland',
        category: 'Accessories',
    }
];

export function Brands({ brands }) {
    return (
        <div>
        {brands.map((brand) => (
            <Category key={brand.category} category={brand.category} brands={brands} />
        ))}
        </div>
    );
};
  

  