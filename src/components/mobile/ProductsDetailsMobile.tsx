import { useContext, useEffect, useState } from 'react';
import ProductContext from '../../context/ProductContext';
import { useRouter } from 'next/router';
import { IProduct } from '../../interfaces/ProductInterface';
import Link from 'next/link';

import {
  DivDescription,
  DivDetailsMobile,
  DivImgWine,
  DivMainDetails,
  DivPriceBtn,
  DivTypeWine,
  FullPrice,
  SpanDiscount,
  SpanNameWine,
  SpanPriceMember
} from '../../styles/mobile/details-products-styles';
import { PriceFull, SpanPrice } from '../../styles/main-products-styles';

export default function ProductsDetailsMobile() {
  const { products } = useContext(ProductContext);
  const { query: { details }} = useRouter();
  const [productDetail, setProductDetail] = useState<IProduct[]>();
  const [quantityProduct, setQuantityProduct] = useState<number>(0);

  type productCart = {
    id: number;
    name: string;
    price: number;
    size: string;
    quantityProduct: number;
  }

  useEffect(() => {
    const productFilter = products.items.filter((el) => el.id === Number(details));
    setProductDetail(productFilter);
  }, []);

  const addToCart = (product: productCart) => {
    const myCurrentCart = JSON.parse(localStorage.getItem('myCart'));
    const sameItem = myCurrentCart?.find((el) => el?.id === product?.id);

    if (sameItem) {
      const addToQuantity = myCurrentCart.map((el) => {
        if (el?.id === sameItem?.id) {
          el.quantityProduct += product.quantityProduct;
          return el;
        }
        return el;
      });

      return localStorage.setItem('myCart', JSON.stringify(addToQuantity));
    }

    if (!myCurrentCart) {
      localStorage.setItem('myCart', JSON.stringify([product]));

      return;
    }

    const newCart = [...myCurrentCart, product];

    localStorage.setItem('myCart', JSON.stringify(newCart));
  };

  const formatPrice = (num: number) => {
    const price = Number(num).toFixed(2).replace('.', ',');
    return price;
  }

  return (
    <DivMainDetails>
      <Link href='/products/1' style={{ textDecoration: 'none'}}>Voltar</Link>
      <DivDetailsMobile>
        {
          productDetail?.map((el: IProduct) => (
            <div key={el.id}>
              <SpanNameWine>
                {el.name}
              </SpanNameWine>
              <DivTypeWine>
                <img src={el.flag} alt='image-wine' width='18px'/>
                <span>{el.country}</span>
                <span>{el.type}</span>
                <span>{el.classification}</span>
                <span>{el.size}</span>
              </DivTypeWine>
              <DivImgWine>
                <img src={el.image} alt='image-wine' width='218px' height='333px'/>
              </DivImgWine>
              <div>
                <DivDescription>
                  <span>Descrição</span>
                  <p>
                    {el.sommelierComment}
                  </p>
                </DivDescription>
                <DivPriceBtn>
                  <div>
                    <SpanDiscount className='discount'>{el.discount}% OFF</SpanDiscount>
                    <SpanPrice>R$ {formatPrice(el.price)}</SpanPrice>
                    <SpanPriceMember>R$ {formatPrice(el.priceMember)}</SpanPriceMember>
                    <FullPrice>PREÇO NÃO-SÓCIO R$ {formatPrice(el.priceNonMember)}</FullPrice>
                  </div>
                  <div>
                    <button
                      type='button'
                      onClick={ () => addToCart({
                        id: el.id,
                        name: el.name,
                        price: el.price,
                        size: el.size,
                        quantityProduct,
                      }) }
                    >
                      Adicionar
                    </button>
                  </div>
                </DivPriceBtn>
              </div>
            </div>
          ))
        }
      </DivDetailsMobile>
    </DivMainDetails>
  );
}
