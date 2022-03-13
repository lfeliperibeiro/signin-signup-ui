import { useStore } from '../store/useStore';

export const Dashboard = () => {
  const { userEmail } = useStore();
  return (
    <div>
      <h1>Ola {userEmail}</h1>
    </div>
  );
};
