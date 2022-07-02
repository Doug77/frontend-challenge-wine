import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

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

export default function Header() {
  const [menuMobile, setMenuMobile] = useState<boolean>(false);

  return (
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
        <DivIconSearch >
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
  );
}
