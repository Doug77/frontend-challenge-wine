import { useContext, useEffect, useState } from 'react';
import ProductContext from '../context/ProductContext';
import { useRouter } from 'next/router';
import { IProduct } from '../interfaces/ProductInterface';
import Link from 'next/link';

export default function ProductsDetails() {
  const { products } = useContext(ProductContext);
  const { query: { details }} = useRouter();
  const [productDetail, setProductDetail] = useState<IProduct[]>();

  useEffect(() => {
    const productFilter = products.items.filter((el) => el.id === Number(details));
    setProductDetail(productFilter);
  }, [])
  console.log(productDetail);

  return (
    <div>
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
                  <button>-</button>
                  <input
                    type='text'
                  />
                  <button>+</button>
                </div>
                <button>Adicionar</button>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
}
