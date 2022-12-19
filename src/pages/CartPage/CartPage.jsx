import MakeupList from "../../components/MakeupList/MakeupList";
import * as ordersAPI from '../../utilities/orders-api';
import OrderDetail from "../../components/OrderDetail/OrderDetail";
import { useNavigate } from "react-router-dom";

export default function CartPage({cart, setCart}) {
    const navigate = useNavigate();
    
    async function handleAddToOrder(makeupId) {
        // 1. Call the addMakeupToCart function in ordersAPI, passing to it the makeupId, and assign the resolved promise to a variable named cart.
        console.log('add to order');
        const updatedCart = await ordersAPI.addMakeupToCart(makeupId);
        console.log(updatedCart);
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
        <>
        <MakeupList
                // listMakeup={listMakeup.filter(makeup => makeup.category.name === activeCat)}
                handleAddToOrder={handleAddToOrder}
                // listMakeup={listMakeup}
                />
        <h1>CartPage</h1>
        <OrderDetail
                order={cart}
                handleChangeQty={handleChangeQty}
                handleCheckout={handleCheckout}
                />
        </>
    );
}