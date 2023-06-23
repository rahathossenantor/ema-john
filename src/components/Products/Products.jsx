import React from "react"
import "./Products.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"


const Products = (props) => {
    const {img, name, key, seller, price, stock} = props.productItem

    return (
        <div className="product-item">
            <div className="product-image">
                <img src={img} alt="product-img" />
            </div>

            <div className="product-info">
                <Link to={`/products/${key}`}><h4>{name}</h4></Link>
                <p><small>By: {seller}</small></p>
                <p>Price: <strong>${price}</strong></p>
                <p><small>Only {stock} left in stock - Order soon!</small></p>
                {
                    props.cartButton && <button onClick={() => props.addToCart(props.productItem)}><FontAwesomeIcon icon={faShoppingCart}/> Add to cart</button>
                }
            </div>
        </div>
    )
}

export default Products