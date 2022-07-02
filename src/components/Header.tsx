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
  DivIcon,
  HeaderStyled,
  InputSearchStyled,
  NavBarStyled,
} from '../styles/header-style';

export default function Header() {
  const [seacrhInput, setSearchInput] = useState(false);

  return (
    <HeaderStyled>
      <ContainerHeader>
        <Image
          src={logo}
          alt="wine-logo"
          width='100px'
          height='100px'
        />
        <NavBarStyled>
          <Link href="/products/1">Clube</Link>
          <Link href="/products/1">Loja</Link>
          <Link href="/products/1">Produtores</Link>
          <Link href="/products/1">Ofertas</Link>
          <Link href="/products/1">Eventos</Link>
        </NavBarStyled>
      </ContainerHeader>
      <ContainerButtons>
        { seacrhInput && <InputSearchStyled type="text" />}
        <DivIcon role='button' onClick={ () => setSearchInput(!seacrhInput) }>
          <Image
            src={ Busca }
            width='50px'
            height='50px'
            alt='search-icon'
          />
        </DivIcon>
        <DivIcon>
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
        </DivIcon>
        <DivIcon>
          <BtnCart type="button">
            <Image
              src={ cart }
              width='50px'
              height='50px'
              alt='cart-icon'
            />
          </BtnCart>
        </DivIcon>
      </ContainerButtons>
    </HeaderStyled>
  );
}
