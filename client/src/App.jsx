import React from 'react'
import { BrowserRouter,Routes , Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CounterApp from './components/miniProjects/CounterApp'
import Navbar from './components/Ecomm/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function App() {
  const data={
      name: "Arun ",
      age:25
  }
  return (
    // <BrowserRouter>
    // <Navbar/>
    //     <Routes>
    //         <Route path='/' element={<HomePage name="abc" age={25} />}>Home</Route>
    //         <Route path="/counterapp" element={<CounterApp/>}></Route>
    //         <Route path="/payment" element={<CounterApp/>}></Route>
        
    //     </Routes>
      
    // </BrowserRouter>
  <>
  <HomePage userData={data}/>
  <Container>
  <h1 className="text-primary">Hello This is Bootstrap</h1>
  <Button variant="primary">Click</Button>
  </Container>
  </>
  )
}

export default App

