import React from 'react';
import { render, screen } from '@testing-library/react';
import { Brands } from '../Brands';


const BRANDS = [
    {
      name: 'Brand 1',
      category: 'Test Category',
      price: 'M',
      img: 'https://www.brand1.com/image.png',
      description: 'Description of brand 1',
      link: 'https://www.brand1.com/'
    },
    {
      name: 'Brand 2',
      category: 'Test Category',
      price: 'L',
      img: 'https://www.brand2.com/image.png',
      description: 'Description of brand 2',
      link: 'https://www.brand2.com/'
    },
    {
      name: 'Brand 3',
      category: 'Test Category',
      price: 'H',
      img: 'https://www.brand3.com/image.png',
      description: 'Description of brand 3',
      link: 'https://www.brand3.com/'
    }
]

describe('Brands', () => {
  test('renders without crashing', () => {
    render(<Brands />);
  })
})
