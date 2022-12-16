import { useState, useEffect } from 'react';
import * as makeupAPI from '../../utilities/makeup-api';
import './OrderPage.css';
import { Link, useNavigate } from 'react-router-dom';
import MenuList from '../../components/MenuList/MenuList';


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

    return (
        <>
            <h1>
                OrderPage
            </h1>
        </>
    );
}