import React from "react"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <div className='body'>
      <div className='page'>
        <Routes>
          <Route>
            <section>наши клиенты</section>
            <section>контакты</section>
            <footer>футер</footer>
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;
