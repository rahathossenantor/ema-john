import React from "react"
import "./Shop.css"
import fakeData from "../../fakeData"
import {useState} from "react"
import Products from "../Products/Products"
import Cart from "../Cart/Cart"

React


const Shop = () => {
    const products = fakeData.slice(0,10)
    
    const [items, setItems] = useState(products)
    const [cart, setCart] = useState([])
    
    setItems
    
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    )
}

export default Shop