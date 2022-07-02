import { useContext, useEffect, useState } from 'react';
import ProductContext from '../context/ProductContext';
import { useRouter } from 'next/router';
import { IProduct } from '../interfaces/ProductInterface';
import Link from 'next/link';
import { DivDetails } from '../styles/details-products-styles';

export default function ProductsDetails() {
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

  const inputQuantity = ({ value }): void => {
    if (quantityProduct < 1) return setQuantityProduct(0);
    setQuantityProduct(Number(value));
  }

  const changeQuantity = (action: string) => {
    if (action === 'add') {
      return setQuantityProduct(quantityProduct + 1);
    } else {
      return setQuantityProduct(quantityProduct - 1);
    }
  }

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

  return (
    <DivDetails>
      <Link href='/products/1' >Voltar</Link>
      {
        productDetail?.map((el: IProduct) => (
          <div key={el.id}>
            <div>
              <img src={el.image} alt='image-wine'/>
            </div>
            <div>
              <div>
                <span>{el.name}</span>
                <img src={el.flag} alt='image-wine' width='30px'/>
                <span>{el.country}</span>
                <span>{el.type}</span>
                <span>{el.classification}</span>
                <span>{el.size}</span>
                <span>{el.rating}</span>
                <span>{el.avaliations}</span>
              </div>
              <div>
                <span>R${el.price}</span>
                <span>NÃO SÓCIO R$ {el.priceNonMember}/UN</span>
              </div>
              <div>
                <span>Comentário do Sommelier</span>
                <p>
                  {el.sommelierComment}
                </p>
              </div>
              <div>
                <div>
                  <button
                  type='button'
                  onClick={ () => changeQuantity('subtract') }
                  >
                    -
                  </button>
                  <input
                    type='number'
                    onChange={ ({target}) => inputQuantity(target) }
                    value={ quantityProduct }
                  />
                  <button
                  type='button'
                  onClick={ () => changeQuantity('add') }
                  >
                    +
                  </button>
                </div>
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
            </div>
          </div>
        ))
      }
    </DivDetails>
  );
}
