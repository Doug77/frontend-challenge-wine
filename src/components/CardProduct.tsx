import { useContext, useState, useEffect } from 'react';
import ProductContext from '../context/ProductContext';
import { IProduct } from '../interfaces/ProductInterface';
import { useRouter } from 'next/router';
import NotFound from './NotFound';

export default function CardProduct({ filter }) {
  const router = useRouter();
  const { products } = useContext(ProductContext);
  const { items } = products;

  const pushToDetails = (num: number) => {
    router.push(`/details/${num}`);
  }

  const createCardProduct = (product) => {
    return (
      <>
        <span>{`${!(products?.totalItems) ? 0 : products?.totalItems} produtos encontrados`}</span>
        {
          product?.map((el: IProduct) => (
            <div
              key={el.id}
            >
              <img src={el.image} alt="img-wine" width="80px" />
              <div>
                {el.name}
              </div>
              <div>
                <span>
                  { el.price }
                </span>
                {' '}
                <span>
                  {`${el.discount}% OFF`}
                </span>
              </div>
              <div>
                <span>{`SÓCIO WINE R$ ${el.priceMember}`}</span>
                {' '}
                <br />
                <span>{`NÃO SÓCIO R$ ${el.priceNonMember}`}</span>
              </div>
              <button
                id={el.id.toString()}
                type="button"
                onClick={({target}) => pushToDetails(Number((target as HTMLInputElement).id))}
              >
                ADICIONAR
              </button>
            </div>
          ))
        }
      </>
    )
  };

  return (
    <>
      { filter?.length === 0 ? <NotFound /> : (!filter ? createCardProduct(items) : createCardProduct(filter))}
    </>
  )
}
