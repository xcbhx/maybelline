import { useState, useEffect } from 'react';
import * as makeupAPI from '../../utilities/makeup-api';
import './OrderPage.css';

export default function OrderPage() {
    const [makeupItems, setMakeupItems] = useState([]);

    useEffect(function () {
        async function getMakeup() {
            const makeup = await makeupAPI.getAllMakeup();
            setMakeupItems(makeup);
            console.log(makeup);
        }
        getMakeup();
    }, []);

    return (
        <>
            <h1>
                OrderPage
            </h1>
        </>
    );
}