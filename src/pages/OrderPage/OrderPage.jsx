import { useState, useEffect, useRef } from 'react';
import * as makeupAPI from '../../utilities/makeup-api';
import * as ordersAPI from '../../utilities/orders-api';
import './OrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
import MakeupList from '../../components/MakeupList/MakeupList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
import CategoryList from '../../components/CategoryList/CategoryList';

export default function OrderPage() {
    const [listMakeup, setListMakeup] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [cart, setCart] = useState(null);
    const categoriesRef = useRef([]);
    const navigate = useNavigate();

    useEffect(function () {
        async function getMakeups() {
            const makeups = await makeupAPI.getAllMakeup();
            categoriesRef.current = [...new Set(makeups.map(makeup => makeup.category.name))];
            setListMakeup(makeups);
            setActiveCat(categoriesRef);
        }
        getMakeups();

        // Load cart (a cart is the unpaid order for the logged in user)
        async function getCart() {
            const cart = await ordersAPI.getCart();
            setCart(cart);
        }
        getCart();
    }, []);
    /*--- Event Handlers ---*/
    async function handleAddToOrder(makeupId) {
        // 1. Call the addMakeupToCart function in ordersAPI, passing to it the makeupId, and assign the resolved promise to a variable named cart.
        const updatedCart = await ordersAPI.addMakeupToCart(makeupId);
        // 2. Update the cart state with the updated cart received from the server
        setCart(updatedCart);
    }

    async function handleChangeQty(makeupId, newQty) {
        const updatedCart = await ordersAPI.setMakeupQtyInCart(makeupId, newQty);
        setCart(updatedCart);
    }

    async function handleCheckout() {
        await ordersAPI.checkout();
        navigate('/orders');
    }


    return (
        <main className="OrderPageMakeup">
            <aside>
                <CategoryList
                    categories={categoriesRef.current}
                    activeCat={activeCat}
                    setActiveCat={setActiveCat}
                />
                <Link to="/orders" className="btnPreOrders">PREVIOUS ORDERS</Link>
            </aside>
            <MakeupList
                listMakeup={listMakeup.filter(makeup => makeup.category.name === activeCat)}
                handleAddToOrder={handleAddToOrder}
            />
            <OrderDetail
                order={cart}
                handleChangeQty={handleChangeQty}
                handleCheckout={handleCheckout}
            />
        </main >
    );
}
// {listMakeup.map((data) => {
//     return (
//         <div className='productContainer'>
//             <form onSubmit={handleAddToOrder}>
//                 <li key={data.id}>{data.name}</li>
//                 <li> <img src={`${data.api_featured_image}`} alt="product" /></li>
//                 <li>${data.price}</li>
//                 <li key={data.id}>{data.product_type}</li>
//                 {/* <li key={data.id}>{data.description}</li> */}
//                 <li key={data.id}>{data.rating}</li>
//                 <button type="submit">Add To Cart</button>
//             </form>
//         </div>
//     )
// })}