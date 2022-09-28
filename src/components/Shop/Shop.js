import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Bill from '../Bill/Bill';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    // to load data from local storage 
    useEffect( () => {
        const getCartData = getStoredCart();
        const savedCart =[];
        for(const e in getCartData){
            const addedProducts =  products.find(product => product.id ===e);
            // to set quantity of products 
            if(addedProducts){
                const quantity = getCartData[e];
                addedProducts.quantity = quantity;
                savedCart.push(addedProducts);
            }
            setCart(savedCart);
        }
    },[products])

    const cartHandler = (products) =>{
        const exist = cart.find(product => product.id === products.id);
        let newCart = [];
        if(!exist){
            products.quantity = 1;
            newCart = [...cart, products];
        }
        else{
            exist.quantity = exist.quantity + 1;
            const rest = cart.filter(product => product.id !== products.id);
            newCart = [...rest, exist];
        }
        setCart(newCart);
        addToDb(products.id)
    }
    return (
        <div className='container'>
            <div className="product-container">
                {
                    products.map(product => <Products
                    key={product.id}
                    product={product}
                    cartHandler={cartHandler}
                    ></Products>)
                }
            </div>
            <div className="cart-container">
                <Bill cart={cart}></Bill>
            </div>
        </div>
    );
};

export default Shop;