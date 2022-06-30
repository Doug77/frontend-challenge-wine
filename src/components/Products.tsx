import { useEffect, useContext } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { IProduct } from '../interfaces/ProductInterface';
import ProductContext from '../context/ProductContext';

export default function Products() {
  const { products, setProducts } = useContext(ProductContext);
  const router = useRouter();
  const CURRENT_URL = router.asPath;

  const getProducts = async (num = 1) => {
    try {
      const { data } = await axios
        .get(`https://wine-back-test.herokuapp.com/products?page=${num}&limit=9`);
      console.log(data);

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

  // const filterByPrice = ({ target }) => {};

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
    <div>
      <div>
        Refine sua busca
        <form>
          <label htmlFor="40">
            <input
              type="radio"
              id="40"
              name="valor"
              value="1"
              // onClick={(event) => filterByPrice(event)}
            />
            Até R$40
          </label>
          <label htmlFor="60">
            <input
              type="radio"
              id="60"
              name="valor"
              value="2"
              // onClick={(event) => filterByPrice(event)}
            />
            R$40 A R$60
          </label>
          <label htmlFor="100">
            <input
              type="radio"
              id="100"
              name="valor"
              value="3"
              // onClick={(event) => filterByPrice(event)}
            />
            R$100 A R$200
          </label>

          <label htmlFor="200">
            <input
              type="radio"
              id="200"
              name="valor"
              value="4"
              // onClick={(event) => filterByPrice(event)}
            />
            R$200 A R$500
          </label>
          <label htmlFor="500">
            <input
              type="radio"
              id="500"
              name="valor"
              value="5"
              // onClick={(event) => filterByPrice(event)}
            />
            Acima de R$500
          </label>
        </form>
      </div>
      <span>{`${products?.totalItems} produtos encontrados`}</span>
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
                type="button"
                onClick={({target}) => console.log(target)}
              >
                ADICIONAR
              </button>
            </div>
          ))
        }
      </div>
      <div>
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
      </div>
    </div>
  );
}
