import './index.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Login } from './Pages/Login/Login';
import { User } from './Pages/User';
import { useStore } from './store/useStore';
import { useEffect } from 'react';

function App() {
  const { token } = useStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/');
    }
  }, [token]);

  return (
    <Routes>
      <Route path={'/'} element={<Login />} />
      {token && <Route path={'/user'} element={<User />} />}
    </Routes>
  );
}

export default App;
