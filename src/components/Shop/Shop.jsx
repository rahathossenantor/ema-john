import React from "react"
import "./Shop.css"
import fakeData from "../../fakeData/products.js"
import {useState} from "react"
import Products from "../Products/Products"


const Shop = () => {
    const products = fakeData.slice(10,20)

    const [items, setItems] = useState(products)
    const [cart, setCart] = useState([])

    // Handling add to cart button
    const addToCart = (product) => {
        const cartItems = [...cart, product]
        setCart(cartItems)
    }

    return (
        <div className="container">
            <div className="products">
                {items.map(product => {
                    return <Products key={product.key} addToCart={addToCart} productItem={product}></Products>
                })}
            </div>

            <div className="cart">
                <h3>Order Summary</h3>
                <h5>Total items in cart: {cart.length}</h5>
            </div>
        </div>
    )
}

export default Shop