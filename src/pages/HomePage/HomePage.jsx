import { useState, useEffect } from 'react';
import * as makeupAPI from '../../utilities/makeup-api';
import * as ordersAPI from '../../utilities/orders-api';
import './HomePage.css';
import MakeupList from '../../components/MakeupList/MakeupList';
// import CategoryList from '../../components/CategoryList/CategoryList';


export default function HomePage({ cart, setCart }) {
    const [listMakeup, setListMakeup] = useState([]);
    // const [activeCat, setActiveCat] = useState('');
    // const categoriesRef = useRef([]);
    // const navigate = useNavigate();

    useEffect(function () {
        async function getMakeups() {
            const makeups = await makeupAPI.getAllMakeup();
            // categoriesRef.current = [...new Set(makeups.map(makeup => makeup.category.name))];
            setListMakeup(makeups);
            // setActiveCat(categoriesRef.current[0]);
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


    return (
        <main className="OrderPageMakeup">
            <MakeupList
                // listMakeup={listMakeup.filter(makeup => makeup.category.name === activeCat)}
                handleAddToOrder={handleAddToOrder}
                listMakeup={listMakeup}
            />
        </main >
    );
}
