import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { useState, useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  const [cart, setcart] = useState({})
  const [SubTotal, setSubTotal] = useState(0)

  useEffect(() => {
    try {
      if (localStorage.getItem('cart')) {
        setcart(JSON.parse(localStorage.getItem('cart')))
      }

    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
  }, [])


  const saveCart = (myCart) => {
    localStorage.setItem('cart', JSON.stringify(myCart))
    let subt = 0;
    let key = Object.keys(myCart)
    // console.log(myCart[key[0]].qty)
    
    for (let i = 0; i < key.length; i++) {
      subt = myCart[key[i]].price * myCart[key[i]].qty;
    }
    setSubTotal(subt)
  }

  const addToCart = (itemCode, name, price, size, varient, qty) => {
    let newCart = cart
    if (itemCode in cart) {
      cart[itemCode].qty = cart[itemCode].qty + qty
    } else {
      newCart[itemCode] = { qty: 1, price, name, size, varient }
    }
    setcart(newCart)
    saveCart(newCart)
  }

  const removeFromCart = (itemCode, name, price, size, varient, qty) => {
    console.log('remove From Cart')
    let newCart = JSON.parse(JSON.stringify(cart))
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if (newCart[itemCode].qty <= 0) {
      delete newCart[itemCode]
    }
    setcart(newCart)
    saveCart(newCart)
  }

  const clearCart = () => {
    setcart({})
    saveCart({})
    console.log("Cart Has Been Clear")
  }
  return (
    <>
      <Navbar addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} SubTotal={SubTotal} saveCart={saveCart} cart={cart} />
      <Component addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} SubTotal={SubTotal} saveCart={saveCart} cart={cart} {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
