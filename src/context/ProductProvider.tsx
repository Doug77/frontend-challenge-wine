import { ReactNode, useState } from 'react';
import { IProducts } from '../interfaces/ProductsInterface';
import ProductContext from './ProductContext';
import { initialValue } from './ProductContext';

type Props = {
  children: ReactNode,
}

function ProductProvider({ children }: Props) {
  const [products, setProducts] = useState<IProducts>(initialValue.products);

  return (
    <ProductContext.Provider value={{
      products,
      setProducts,
    }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
