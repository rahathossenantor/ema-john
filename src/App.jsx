import {useState} from "react"
import "./App.css"
import Header from "./components/Header/Header"
import Shop from "./components/Shop/Shop"

function App() {
  return (
    <>
      <main>
        <Header></Header>
        <Shop></Shop>
      </main>
    </>
  )
}

export default App