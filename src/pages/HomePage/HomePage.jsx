import { useState, useEffect } from 'react';
import * as makeupAPI from '../../utilities/makeup-api';
import * as ordersAPI from '../../utilities/orders-api';
import './HomePage.css';
import { Link } from 'react-router-dom';
import MakeupList from '../../components/MakeupList/MakeupList';
import OrderDetail from '../../components/OrderDetail/OrderDetail';
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
        console.log('add to order');
        const updatedCart = await ordersAPI.addMakeupToCart(makeupId);
        console.log(updatedCart);
        // 2. Update the cart state with the updated cart received from the server
        setCart(updatedCart);
    }


    return (
        <main className="OrderPageMakeup">
            <aside>
            {/* <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        /> */}
                <Link to="/orders" className="btnPreOrders">PREVIOUS ORDERS</Link>
            </aside>
            <MakeupList
                // listMakeup={listMakeup.filter(makeup => makeup.category.name === activeCat)}
                handleAddToOrder={handleAddToOrder}
                listMakeup={listMakeup}
                /> 
            {/* <OrderDetail
                order={cart}
                handleChangeQty={handleChangeQty}
                handleCheckout={handleCheckout}
                /> */}
        </main >
    );
}
// {listMakeup.map((data) => {
//     return (
//         <div className='productContainer'>
//             <form onSubmit={handleAddToOrder}>
//                 <li key={data.id}>{data.name}</li>
//                 <li key={data.api_featured_image}> <img src={`${data.api_featured_image}`} alt="product" /></li>
//                 <li key={data.price}>${data.price}</li>
//                 <li key={data.product_type}>{data.product_type}</li>
//                 {/* <li>{data.description}</li> */}
//                 <li key={data.rating}>Rating: {data.rating}</li>
//                 <button type="submit">Add To Cart</button>
//             </form>
//         </div>
//     )
// })}