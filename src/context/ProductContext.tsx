import { createContext } from 'react';
import { IProducts } from '../interfaces/ProductsInterface';

export const initialValue = {
  products: {
    items: [],
    itemsPerPage: 0,
    page: 0,
    totalItems: 0,
    totalPages: 0,
  },
  setProducts: () => {},
};

type ProductContextType = {
  products: IProducts,
  setProducts: (newState: {}) => void;
}

const ProductContext = createContext<ProductContextType>(initialValue);

export default ProductContext;
