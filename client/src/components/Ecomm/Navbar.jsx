import { Link } from "react-router-dom"

function Navbar() {
  
  return (
    <div style={{display:"flex",justifyContent:"space-around",backgroundColor:"#eee"}}>
<Link to="/">Home</Link>
<Link to="/cart">Cart</Link>
{/* <Link to="/payment">Checkout</Link> */}
{/* <h1>Navbar</h1> */}
    </div>
  )
}

export default Navbar
