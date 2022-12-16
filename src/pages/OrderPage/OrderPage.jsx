import { useState, useEffect } from 'react';
import * as makeupAPI from '../../utilities/makeup-api';
import './OrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';


export default function OrderPage({ user, setUser }) {
    const [makeupItems, setMakeupItems] = useState([]);
    const [cart, setCart] = useState(null);
    const navigate = useNavigate();

    useEffect(function () {
        async function getMakeup() {
            const makeup = await makeupAPI.getAllMakeup();
            setMakeupItems(makeup);
        }
        getMakeup();

        // Load cart (a cart is the unpaid order for the logged in user)
        async function getCart() {
            const cart = await ordersAPI.getCart();
            setCart(cart);
        }
        getCart();
    }, []);
    /*--- Event Handlers ---*/
    async function handleAddToOrder(makeupId) {
        // 1. Call the addmakeupToCart function in ordersAPI, passing to it the makeupId, and assign the resolved promise to a variable named cart.
        const updatedCart = await ordersAPI.addmakeupToCart(makeupId);
        // 2. Update the cart state with the updated cart received from the server
        setCart(updatedCart);
    }

    async function handleChangeQty(makeupId, newQty) {
        const updatedCart = await ordersAPI.setmakeupQtyInCart(makeupId, newQty);
        setCart(updatedCart);
    }

    async function handleCheckout() {
        await ordersAPI.checkout();
        navigate('/orders');
    }


    return (
        <main className="OrderPage">
            <aside>
                <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
                <UserLogOut user={user} setUser={setUser} />
            </aside>
            <MenuList
                makeupItems={makeupItems}
                handleAddToOrder={handleAddToOrder}
            />
            <OrderDetail
                order={cart}
                handleChangeQty={handleChangeQty}
                handleCheckout={handleCheckout}
            />
        </main>
    );
}