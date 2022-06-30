import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <img src="https://img.wine.com.br/logo/wine/black/wine.svg" alt="wine-logo" />
      <nav>
        <Link href="/clube">Clube</Link>
        <Link href="/loja">Loja</Link>
        <Link href="/produtores">Produtores</Link>
        <Link href="/ofertas">Ofertas</Link>
        <Link href="/eventos">Eventos</Link>
      </nav>
      <div>
        <input type="text" />
        <button type="button">
          Perfil
        </button>
        <button type="button">
          Carrinho
        </button>
      </div>
    </header>
  );
}
