import React, { useState, useEffect } from 'react';

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
    <div>
      {categoryData.map((category) => (
        <div className="style-container">
        <a href={category.html}>
        <img src={category.img} alt={category.name}/>
        <p>{category.name}</p>
        </a>
      </div>
      )) }
    </div>
    
  );
}

