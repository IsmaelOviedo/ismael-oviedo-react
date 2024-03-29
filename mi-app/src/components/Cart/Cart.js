import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../Context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <h1>No hay productos en el carrito</h1>
        )
    }

    return (     
        <div>
            <h1>Cart</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h4>Total: ${total}</h4>
            <button onClick={() => clearCart()} className="Button">Vaciar carrito</button>
            <Link to='/checkout' className='Option'>Checkout</Link>
        </div>
    )
}

export default Cart