import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Mian from './components/Mian'
import DetailPage from './components/DetailPage'

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Mian />}></Route>
        <Route path="/detail/:id" element={<DetailPage /> }></Route>
      </Routes>
      

    </div>
  )
}

export default App