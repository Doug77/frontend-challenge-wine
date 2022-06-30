import { useContext } from 'react';
import ProductContext from '../context/ProductContext';
import { IProduct } from '../interfaces/ProductInterface';
import { useRouter } from 'next/router';

export default function CardProduct() {
  const router = useRouter();
  const { products } = useContext(ProductContext);

  const pushToDetails = (num: number) => {
    router.push(`/details/${num}`);
  }

  return (
    <div>
      {
        products?.items.map((el: IProduct) => (
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
    </div>
  )
}
