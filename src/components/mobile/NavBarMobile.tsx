import Link from 'next/link';
import { NavBarStyledMobile } from '../../styles/mobile/nav-bar-mobile';

export default function NavBarMobile() {
  return (
    <NavBarStyledMobile>
      <Link href="/products/1">Clube</Link>
      <Link href="/products/1">Loja</Link>
      <Link href="/products/1">Produtores</Link>
      <Link href="/products/1">Ofertas</Link>
      <Link href="/products/1">Eventos</Link>
    </NavBarStyledMobile>
  )
}
