import React from 'react'
import { BrowserRouter,Routes , Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CounterApp from './components/miniProjects/CounterApp'
import Navbar from './components/Ecomm/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>}>Home</Route>
            <Route path="/counterapp" element={<CounterApp/>}></Route>
            <Route path="/payment" element={<CounterApp/>}></Route>
        
        </Routes>
      
    </BrowserRouter>
  )
}

export default App
