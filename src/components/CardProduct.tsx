import { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import { IProduct } from '../interfaces/ProductInterface';
import { useRouter } from 'next/router';
import NotFound from './NotFound';
import {
  DivButtonAdd,
  DivNameWine,
  DivPrice,
  DivPriceSocio,
  DivProduct,
  DivProductCard,
  DivSpanTotalProducts,
  PriceFull,
  SpanOffPrice,
  SpanPrice,
  SpanWineSocio
} from '../styles/main-products-styles';

export default function CardProduct({ filter }) {
  const router = useRouter();
  const { products } = useContext(ProductContext);
  const { items } = products;

  const pushToDetails = (num: number) => {
    router.push(`/details/${num}`);
  }

  const formatPrice = (num: number) => {
    const price = Number(num).toFixed(2).replace('.', ',');
    return price;
  }

  const createCardProduct = (product) => {
    return (
      <>
        <DivSpanTotalProducts>
          <span>
            <b>
              {`${!(products?.totalItems) ? 0 : products?.totalItems}`}
            </b>
            <span style={{ color: '#888888' }}> produtos encontrados</span>
          </span>
        </DivSpanTotalProducts>
        <DivProductCard>
          {
            product?.map((el: IProduct) => (
              <div
                key={el.id}
              >
                <DivProduct>
                  <img src={el.image} alt="img-wine" width="80px" />
                  <DivNameWine>
                    {el.name}
                  </DivNameWine>
                  <div>
                    <SpanPrice>
                      R$
                      { formatPrice(el.price) }
                    </SpanPrice>
                    {' '}
                    <SpanOffPrice>
                      {`${el.discount}% OFF`}
                    </SpanOffPrice>
                  </div>
                  <DivPrice>
                    <SpanWineSocio>
                      SÓCIO
                      <br/>
                      WINE
                    </SpanWineSocio>
                    <DivPriceSocio>
                      R$ {` \n ${formatPrice(el.priceMember)}`}
                    </DivPriceSocio>
                    {' '}
                    <br />
                  </DivPrice>
                  <PriceFull>
                    {`NÃO SÓCIO R$ ${formatPrice(el.priceNonMember)}`}
                  </PriceFull>
                </DivProduct>
                <DivButtonAdd>
                  <button
                    id={el.id.toString()}
                    type="button"
                    onClick={({target}) => pushToDetails(Number((target as HTMLInputElement).id))}
                  >
                    ADICIONAR
                  </button>
                </DivButtonAdd>
              </div>
            ))
          }
        </DivProductCard>
      </>
    )
  };

  return (
    <>
      { filter?.length === 0 ? <NotFound /> : (!filter ? createCardProduct(items) : createCardProduct(filter))}
    </>
  )
}
