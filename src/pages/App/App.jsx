import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import CartPage from '../CartPage/CartPage';




export default function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState(null);


  return (
    <main className="App">
      { user ?
          <>
          <NavBar user={user} setUser={setUser} />
            {/* Route compenents in here */}
          <Routes>
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/*" element={<HomePage user={user} setUser={setUser} cart={cart} setCart={setCart}/>} />
            <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
          </Routes>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
