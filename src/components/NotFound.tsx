import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();

  return (
    <div>
      <div
        data-testid='link-to-back'
      >
        <Link
          href='/products'

        >
          Voltar
        </Link>
      </div>
      <div
        data-testid='products-not-found'
      >
        Nenhum produto encontrado! :(
      </div>
    </div>
  );
};
