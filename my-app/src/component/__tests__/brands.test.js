import * as React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Brands } from '../Brands';
import { useLocation } from 'react-router-dom';
import { JSDOM } from 'jsdom';

const { window } = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
});
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

jest.mock('react-bootstrap/DropdownButton', () => {
  return {
    __esModule: true,
    default: jest.fn().mockReturnValue(<div data-testid="mocked-dropdown-button"></div>)
  };
});

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

const useStateMock = (defaultValue) => [defaultValue, jest.fn()];
jest.spyOn(React, 'useState').mockImplementation(useStateMock);

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
];

describe('Brands', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders without crashing', () => {
    useLocation.mockReturnValue({ state: { categoryName: 'test' } });
    render(<Brands />);
  });
});
