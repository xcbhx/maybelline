import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import EyesPage from '../EyesPage/EyesPage';  
import FacePage from '../FacePage/FacePage';
import LipsPage from '../LipsPage/LipsPage';
import * as makeupAPI from '../../utilities/makeup-api';



export default function App() {
  const [user, setUser] = useState(getUser());
  const [makeupItems, setMakeupItems] = useState([]);

  async function getAllMakeup() {
    const allMakeup = await makeupAPI.getAll();
    setMakeupItems(allMakeup);
  }


  return (
    <main className="App">
      { user ?
          <>
          <NavBar user={user} setUser={setUser} />
            {/* Route compenents in here */}
          <Routes>
            <Route path="/" element={<HomePage getAllMakeup={getAllMakeup} />} />
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
