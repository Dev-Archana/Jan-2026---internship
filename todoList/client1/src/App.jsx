
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Signup from './pages/Signup'
import Login from './pages/Login'
function App() {
 
  return (
   <>
 <Navbar/>
 <Routes>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
 </Routes>
   </>
  )
}

export default App
