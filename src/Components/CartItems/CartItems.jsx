import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Productos</p>
            <p>Titulo</p>
            <p>Precio</p>
            <p>Cantidad</p>
            <p>Total</p>
            <p>Eliminar</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id] > 0){
                return <div>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className='carticon-product-icon' />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price * cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Total del Carrito</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Costo de Envío</p>
                        <p>Gratis</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalCartAmount()}</h3>
                    </div>
                </div>
                <button>Continuar al pago</button>
            </div>
            <div className="cartitems-promocode">
                <p>Si tiene un código promocional, ingreselo aquí</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder='Código promocional' />
                    <button>Enviar</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems