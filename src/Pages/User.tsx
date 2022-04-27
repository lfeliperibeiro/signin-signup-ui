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
  const { token, setToken } = useStore();

  const { data } = useFetch<User>('/users/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  function handleLogout() {
    return setToken('')
  }

  return (
    <div
      className={
        'bg-amber-300 w-screen h-screen flex items-center justify-center'
      }
    >
      <div className={'bg-white rounded-lg shadow-lg m-6 py-10'}>
        <div className={'mb-20 ml-5'}>
          <button className={'bg-amber-500 py-1 px-4 rounded text-white hover:bg-amber-900'} onClick={handleLogout}>Sair</button>
        </div>
        <div className={'px-20'}>

          <h1>Ola {data?.email}</h1>
        </div>
      </div>
    </div>
  );
};
