import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "../Header/Header";
import Promo from "../Promo/Promo"

function App() {

  return (
    <div className='body'>
      <div className='page'>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/" element={<Promo />} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
