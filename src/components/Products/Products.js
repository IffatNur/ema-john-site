import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css'
const Products = (props) => {
    const {product, cartHandler } = props;
    const {img, name, price, seller, ratings } = product;
    return (
        <div className='card-container'>
            <div className='card'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>Price : ${price}</h4>
                <small>Manufecturer: {seller}</small><br />
                <small>Rating: {ratings}</small><br />
            </div>
            <button onClick={() => cartHandler(product)}>Add to cart
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Products;