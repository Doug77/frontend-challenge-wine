import { useRouter } from 'next/router';
import Link from 'next/link';

export default function NotFound() {
  const router = useRouter();

  return (
    <div>
      <Link href='/products'>
        Voltar
      </Link>
      <div>
        Nenhum produto encontrado! :(
      </div>
    </div>
  );
};
