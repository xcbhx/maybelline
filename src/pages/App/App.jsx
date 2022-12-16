import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import OrderPage from '../OrderPage/OrderPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import EyesPage from '../EyesPage/EyesPage';  
import FacePage from '../FacePage/FacePage';
import LipsPage from '../LipsPage/LipsPage';




export default function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
      { user ?
          <>
          <NavBar user={user} setUser={setUser} />
            {/* Route compenents in here */}
          <Routes>
            <Route path="/" element={<OrderPage />} />
            <Route path="/face" element={<FacePage />} />
            <Route path="/eyes" element={<EyesPage />} />
            <Route path="/lips" element={<LipsPage />} />
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
