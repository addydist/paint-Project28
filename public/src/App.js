import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Canvas from './pages/Canvas'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Canvas/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App