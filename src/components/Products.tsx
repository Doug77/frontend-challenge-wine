import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import ProductContext from '../context/ProductContext';
import CardProduct from './CardProduct';

import { DivButtonPages, DivTextPrice, FormFilter, FormStyled, MainCardProducts } from '../styles/main-products-styles';

export default function Products() {
  const { products, setProducts } = useContext(ProductContext);
  const [filterProducts, setFilterProducts] = useState();
  const router = useRouter();
  const CURRENT_URL = router.asPath;

  const getProducts = async (num = 1, limit = 9) => {
    try {
      const { data } = await axios
        .get(`https://wine-back-test.herokuapp.com/products?page=${num}&limit=${limit}`);

      setProducts(data);
      return data;
    } catch (error) {
      return error.message;
    }
  };

  const buttonPages = () => {
    const pageButtons = Array.from({ length: products?.totalPages })
      .map((_el, index) => (
        <button
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          id={`${index + 1}`}
          type="button"
          onClick={({ target }) => router
            .push(`/products/${Number((target as HTMLInputElement).id)}`)}
        >
          {index + 1}
        </button>
      ));

    return pageButtons;
  };

  const filterByPrice = async ({ target }) => {
    const { data: { items } } = await axios
      .get(`https://wine-back-test.herokuapp.com/products?page=1&limit=10`);

    switch (Number(target.value)) {
      case 1:
        const result1 = items?.filter((el) => (el.price <= 40));

        setFilterProducts(result1);
        break;
      case 2:
        const result2 = items?.filter((el) => (el.price > 40 && el.price < 60));

        setFilterProducts(result2);
        break;
      case 3:
        const result3 = items?.filter((el) => (el.price > 100 && el.price < 200));

        setFilterProducts(result3);
        break;
      case 4:
        const result4 = items?.filter((el) => (el.price > 200 && el.price < 500));

        setFilterProducts(result4);
      break;
      case 5:
        const result5 = items?.filter((el) => (el.price > 500));

        setFilterProducts(result5);
        break;
      default:
        break;
    }
  };

  const changePage = (action: string) => {
    if (action === 'next') {
      const pageId = Number(router.query.products) + 1;
      router.push(`/products/${pageId}`);
    } else {
      const pageId = Number(router.query.products) - 1;
      router.push(`/products/${pageId}`);
    }
  };

  useEffect(() => {
    const id = router.query.products;
    if (CURRENT_URL === '/products') {
      router.push('/products/1');
      getProducts();
    } else {
      getProducts(Number(id));
    }
  }, [CURRENT_URL, router, router.asPath]);

  return (
    <MainCardProducts>
      <FormStyled>
        <span>
          Refine sua busca
        </span>
        <FormFilter>
          <DivTextPrice>
            Por Preço
          </DivTextPrice>
          <label htmlFor="40">
            <input
              type="radio"
              id="40"
              name="valor"
              value="1"
              onClick={(event) => filterByPrice(event)}
            />
            {' '}
            Até R$40
          </label>
          <label htmlFor="60">
            <input
              type="radio"
              id="60"
              name="valor"
              value="2"
              onClick={(event) => filterByPrice(event)}
            />
            {' '}
            R$40 A R$60
          </label>
          <label htmlFor="100">
            <input
              type="radio"
              id="100"
              name="valor"
              value="3"
              onClick={(event) => filterByPrice(event)}
            />
            {' '}
            R$100 A R$200
          </label>
          <label htmlFor="200">
            <input
              type="radio"
              id="200"
              name="valor"
              value="4"
              onClick={(event) => filterByPrice(event)}
            />
            {' '}
            R$200 A R$500
          </label>
          <label htmlFor="500">
            <input
              type="radio"
              id="500"
              name="valor"
              value="5"
              onClick={(event) => filterByPrice(event)}
            />
            {' '}
            Acima de R$500
          </label>
        </FormFilter>
      </FormStyled>
      <div>
        <CardProduct filter={filterProducts}/>
        {
          !filterProducts ? (
            <DivButtonPages>
              <button
                type="button"
                onClick={() => changePage('previous')}
                disabled={(products?.page === 1)}
              >
                Anterior
              </button>
              { buttonPages() }
              <button
                type="button"
                onClick={() => changePage('next')}
                disabled={(products?.totalPages === products?.page)}
              >
                Próximo
              </button>
            </DivButtonPages>
          ) : <span>{' '}</span>
        }
      </div>
    </MainCardProducts>
  );
}
