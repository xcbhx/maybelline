import { useState, useEffect } from 'react';
import './OrderHistoryPage.css';
import * as ordersAPI from '../../utilities/orders-api';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import OrderList from '../../components/OrderList/OrderList';


export default function OrderHistoryPage({ user, setUser }) {
  const [orders, setOrders] = useState([]);
  const [activeOrder, setActiveOrder] = useState(null);

  useEffect(function() {
    async function getOrders() {
      const orders = await ordersAPI.getAllForUser();
      setActiveOrder(orders[0] || null);
      setOrders(orders);
    }
    getOrders();
  }, []);

  return (
    <main>
      {/* Render an OrderList component (needs to be coded) */}
      <OrderList
        orders={orders}
        activeOrder={activeOrder}
        setActiveOrder={setActiveOrder}
      />
      {/* Render the existing OrderDetail component */}
      <OrderDetail order={activeOrder} />
    </main>
  );
}