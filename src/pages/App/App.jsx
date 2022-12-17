import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import OrderPage from '../OrderPage/OrderPage';
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
            <Route path="/orders/new" element={<OrderPage user={user} setUser={setUser} />} />
            <Route path="/face" element={<FacePage />} />
            <Route path="/eyes" element={<EyesPage />} />
            <Route path="/lips" element={<LipsPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
