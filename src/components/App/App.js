import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {

  return (
    <div className='body'>
      <div className='page'>
        <Routes>
          <Route>
            <Header />
            <Footer />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;
