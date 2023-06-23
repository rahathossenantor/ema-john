import React from "react"
import logo from "../../images/logo.png"
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="ema-john" />
            <nav>
                <a href="/shop">Shop</a><a href="/review">Review Order</a><a href="/inventory">Manage Inventory</a>
            </nav>
        </header>
    )
}

export default Header