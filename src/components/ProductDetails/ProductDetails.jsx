import React from "react"
import "./ProductDetails.css"
import fakeData from "../../fakeData"
import Products from "../Products/Products"
import { useParams } from "react-router-dom"

const ProductDetails = () => {
    const {productKey} = useParams()
    const product = fakeData.find(item => item.key === productKey)

    return (
        <div>
            <Products cartButton={false} productItem={product}></Products>
        </div>
    )
}

export default ProductDetails