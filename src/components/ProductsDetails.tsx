import { useContext, useEffect, useState } from 'react';
import ProductContext from '../context/ProductContext';
import { useRouter } from 'next/router';
import { IProduct } from '../interfaces/ProductInterface';
import { AboutWine, ButtonAddToCart, ButtonQuantity, DetailsWine, DivButtonAdd, DivDetails, DivImageWine, MainDetailsProduct, NameWine, PriceMemberWine, PriceNonMemberWine, SommelierComment, TypeDetailsWine } from '../styles/details-products-styles';

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

  const formatPrice = (num: number) => {
    const price = Number(num).toFixed(2).replace('.', ',');
    return price;
  }

  return (
    <DivDetails>
      {
        productDetail?.map((el: IProduct) => (
          <div key={el.id}>
            <MainDetailsProduct>
              <DivImageWine>
                <img src={el.image} alt='image-wine' width='381px' height='579px'/>
              </DivImageWine>
              <AboutWine>
                <DetailsWine>
                  <NameWine>{el.name}</NameWine>
                  <TypeDetailsWine>
                    <img src={el.flag} alt='image-wine' width='16px'/>
                    <span>{el.country}</span>
                    <span>{el.type}</span>
                    <span>{el.classification}</span>
                    <span>{el.size}</span>
                    <span>Nota: {el.rating}</span>
                    <span>Avaliações: {el.avaliations}</span>
                  </TypeDetailsWine>
                </DetailsWine>
                <div>
                  <PriceMemberWine>R$ {formatPrice(el.priceMember)}</PriceMemberWine>
                  <PriceNonMemberWine>NÃO SÓCIO R$ {formatPrice(el.priceNonMember)}/UN.</PriceNonMemberWine>
                </div>
                <SommelierComment>
                  <span>Comentário do Sommelier</span>
                  <p>
                    {el.sommelierComment}
                  </p>
                </SommelierComment>
                <DivButtonAdd>
                  <ButtonQuantity
                  type='button'
                  onClick={ () => changeQuantity('subtract') }
                  >
                    -
                  </ButtonQuantity>
                  <input
                    type='number'
                    onChange={ ({target}) => inputQuantity(target) }
                    value={ quantityProduct }
                  />
                  <ButtonQuantity
                  type='button'
                  onClick={ () => changeQuantity('add') }
                  >
                    +
                  </ButtonQuantity>
                  <ButtonAddToCart
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
                  </ButtonAddToCart>
                </DivButtonAdd>
              </AboutWine>
            </MainDetailsProduct>
          </div>
        ))
      }
    </DivDetails>
  );
}
