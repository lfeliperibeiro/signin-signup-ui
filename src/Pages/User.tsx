import { useStore } from '../store/useStore';
import { useFetch } from '../hooks/useFetch';

type User = {
  id: number;
  createdAt?: string;
  updatedAt?: string;
  email: string;
  firstName?: string;
  lastName?: string;
};
export const User = () => {
  const { token } = useStore();

  const { data } = useFetch<User>('/users/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return (
    <div
      className={
        'bg-amber-300 w-screen h-screen flex items-center justify-center'
      }
    >
      <div className={'bg-white rounded-lg shadow-lg m-6'}>
        <h1>Ola {data?.email}</h1>
      </div>
    </div>
  );
};
