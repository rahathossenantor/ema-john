import React from "react"
import "./Products.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"


const Products = (props) => {
    
    const {img, name, seller, price, stock} = props.productItem

    return (
        <div className="product-item">
            <div className="product-image">
                <img src={img} alt="product-img" />
            </div>

            <div className="product-info">
                <h4>{name}</h4>
                <p><small>By: {seller}</small></p>
                <p>Price: <strong>${price}</strong></p>
                <p><small>Only {stock} left in stock - Order soon!</small></p>
                <button onClick={() => props.addToCart(props.productItem)}><FontAwesomeIcon icon={faShoppingCart}/> Add to cart</button>
            </div>
        </div>
    )
}

export default Products