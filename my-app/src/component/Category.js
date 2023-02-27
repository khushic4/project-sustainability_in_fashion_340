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

function CategoryCard(props) {
  const { categoryData } = props;
  const { name } = categoryData;

export default function CategoryCards() {
  const [categoryData,setCategoryData]= useState([]);
  const getData=()=>{
    console.log("HERE WE ARE")
    Promise.all(fetch('../data/stylecategories.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    ))
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setCategoryData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="style-container">
      <a href={categoryData.html}>
        <img src={categoryData.img} alt={categoryData.name} />
        <p>{categoryData.name}</p>
      </a>
    </div>
    
  );
}

