import './index.css';
import { Routes, Route } from 'react-router-dom';
import { Login } from './Pages/Login/Login';
import { Dashboard } from './Pages/DashBoard';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Login />} />
      <Route path={'/dashboard'} element={<Dashboard />} />
    </Routes>
  );
}

export default App;
