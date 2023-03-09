import React from 'react';
import { BrandList } from './BrandList.js';


export default function Category(props) {
  const { categoryData, category, brands } = props;

  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {brands.filter((brand) => brand.category === category)
          .map((brand) => (
            <BrandList key={categoryData} brand={brand} />
          ))}
      </ul>
    </div>
  );
};
