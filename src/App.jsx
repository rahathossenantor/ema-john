import "./App.css"
import Header from "./components/Header/Header"
import Shop from "./components/Shop/Shop"
import Review from "./components/Review/Review"
import Inventory from "./components/Inventory/Inventory"
import ProductDetails from "./components/ProductDetails/ProductDetails"
import NotFound from "./components/NotFound/NotFound"
import {Routes, Route} from "react-router-dom"


function App() {
  return (
    <>
      <main>
        <Header></Header>
          <Routes>
            <Route exact path="/" element={<Shop></Shop>} />

            <Route path="/shop" element={<Shop></Shop>} />

            <Route path="/review" element={<Review></Review>} />

            <Route path="/inventory" element={<Inventory></Inventory>} />

            <Route path="/products/:productKey" element={<ProductDetails></ProductDetails>} />

            <Route path="*" element={<NotFound></NotFound>} />
          </Routes>
      </main>
    </>
  )
}

export default App