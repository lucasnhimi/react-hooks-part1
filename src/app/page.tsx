'use client';

import styles from './page.module.css';
import useFetch from '@/hooks/useFetch';

// 1 - Somente em React Function
// 2 - Hooks devem estar no topo do componente
// 3 - Custom Hook

type User = {
  id: number;
  name: string;
};

export default function Home() {
  const { data, loading, error } = useFetch<User[]>(
    'https://jsonplaceholder.typicode.com/users'
  );

  return (
    <main className={styles.main}>
      <ul>
        {loading && <li>Carregando...</li>}
        {error && <li>Erro ao carregar</li>}
        {data?.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}
