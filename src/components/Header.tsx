import Link from 'next/link';
import Image from 'next/image';
import { useState, useContext, useEffect } from 'react';
import ProductContext from '../context/ProductContext';
import { IProduct } from '../interfaces/ProductInterface';

import cart from '../../assets/images/Carrinho.svg';
import Busca from '../../assets/images/Busca2.svg'
import conta from '../../assets/images/conta.svg'
import logo from '../../assets/images/black.svg'
import {
  BtnCart,
  BtnProfile,
  ContainerButtons,
  ContainerHeader,
  DivIconBtn,
  DivIconProfile,
  DivIconSearch,
  HeaderNav,
  HeaderStyled,
  NavBarStyled,
} from '../styles/header-style';
import { DivContainer, DivLine1, DivLine2, DivLine3 } from '../styles/mobile/burger-menu-styles';
import NavBarMobile from './mobile/NavBarMobile';
import produtcs from '../pages/products';
import { BtnSearchStyle, DivSearchStyle, InputSearchStyle } from '../styles/input-search-styles';

export default function Header() {
  const [menuMobile, setMenuMobile] = useState<boolean>(false);
  const [inputSearch, setInputSearch] = useState<boolean>(false);
  const [showBtnClear, setShowBtnClear] = useState<boolean>(false);
  const [allProducts, setAllProduts] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const { products, setProducts } = useContext(ProductContext);

  const filterBySearch = (value: string, itemsToFilter: IProduct[]) => {
    setShowBtnClear(true);
    if (value === '') return null;

    const filterProducts = itemsToFilter.filter((el) => el.name.includes(value));

    console.log('tudo filtrado', filterProducts);

    setProducts(filterProducts);

    console.log('context atual', products);
  };

  const mostrar = () => {
    setAllProduts(products.items);
    setInputSearch(!inputSearch)
  }

  return (
    <>
      <HeaderStyled>
        <ContainerHeader>
          <DivContainer
            role='button'
            onClick={ () => setMenuMobile(!menuMobile)}
          >
            <DivLine1></DivLine1>
            <DivLine2></DivLine2>
            <DivLine3></DivLine3>
          </DivContainer>
          <Image
            src={logo}
            alt="wine-logo"
            width='100px'
            height='100px'
          />
          {
            menuMobile ? <NavBarMobile /> :
            <NavBarStyled>
              <Link href="/products/1">Clube</Link>
              <Link href="/products/1">Loja</Link>
              <Link href="/products/1">Produtores</Link>
              <Link href="/products/1">Ofertas</Link>
              <Link href="/products/1">Eventos</Link>
            </NavBarStyled>
          }
          <HeaderNav>
            <Link href="/products/1">Clube</Link>
            <Link href="/products/1">Loja</Link>
            <Link href="/products/1">Produtores</Link>
            <Link href="/products/1">Ofertas</Link>
            <Link href="/products/1">Eventos</Link>
          </HeaderNav>
        </ContainerHeader>
        <ContainerButtons>
          <DivIconSearch
            role='button'
            onClick={ () => mostrar() }
          >
            <Image
              src={ Busca }
              width='50px'
              height='50px'
              alt='search-icon'
            />
          </DivIconSearch>
          <DivIconProfile>
            <BtnProfile
              type="button"
            >
              <Image
                src={ conta }
                width='50px'
                height='50px'
                alt='user-icon'
              />
            </BtnProfile>
          </DivIconProfile>
          <DivIconBtn>
            <BtnCart type="button">
              <Image
                src={ cart }
                width='50px'
                height='50px'
                alt='cart-icon'
              />
            </BtnCart>
          </DivIconBtn>
        </ContainerButtons>
      </HeaderStyled>
      {
        inputSearch && <DivSearchStyle>
        <InputSearchStyle
          placeholder='Ex.: 2015...'
          onChange={ ({ target }) => setSearchValue(target.value) }
        />
        <BtnSearchStyle
          type='button'
          onClick={ () => filterBySearch(searchValue, allProducts) }
        >
          Pesquisar
        </BtnSearchStyle>
        {
          showBtnClear && <Link href='/products'>Limpar Filtros</Link>
        }
      </DivSearchStyle>
      }
    </>
  );
}
