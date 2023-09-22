import React from "react"
import { Routes, Route } from "react-router-dom"
import Header from "../Header/Header";

function App() {

  return (
    <div className='body'>
      <div className='page'>
        <Routes>
          <Route>
            <Header />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;
