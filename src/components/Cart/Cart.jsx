import React from "react"
import "./Cart.css"

const Cart = (props) => {

    const costFormatter = (price) => {
        price = price.toFixed(2)
        return parseFloat(price)
    }

    const cart = props.cart
    let productPrice = 0
    let shippingCost = 0
    
    // Calculating product price
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i]
        productPrice += product.price
    }
    
    // Calculating shipping cost
    if (productPrice > 0 && productPrice < 50) {
        shippingCost = 9.99
    } else if (productPrice > 50 && productPrice < 100) {
        shippingCost = 4.99
    }
    
    // Calculating tax
    const tax = productPrice / 10

    // Calculating grand total
    const grandTotal = (productPrice + shippingCost + tax)

    return (
        <div className="order-summary">
            <h3>Order Summary</h3>
            <h5>Items in cart: {cart.length}</h5>
            <p><small>Product price: ${costFormatter(productPrice)}</small></p>
            <p><small>Shipping cost: ${costFormatter(shippingCost)}</small></p>
            <p><small>Tax + VAT: ${costFormatter(tax)}</small></p>
            <p>Total price: ${costFormatter(grandTotal)}</p>
        </div>
    )
}

export default Cart