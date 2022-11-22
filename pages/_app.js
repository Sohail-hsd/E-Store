import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.css';
import LoadingBar from 'react-top-loading-bar'
import createEmotionCache from "../src/createEmotionCache";
import React from 'react'
import PropTypes from "prop-types";
import { CacheProvider } from "@emotion/react";



const clientSideEmotionCache = createEmotionCache();



function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;


  const [cart, setcart] = useState({})
  const [SubTotal, setSubTotal] = useState(0)
  const [key, setKey] = useState()
  const [user, setUser] = useState({ value: null })
  const [progress, setProgress] = useState(0)
  const router = useRouter()

  useEffect(() => {
    router.events.on('routeChangeStart', () => setProgress(60))
    router.events.on('routeChangeComplete', () => setProgress(100))
    try {
      if (localStorage.getItem('cart')) {
        setcart(JSON.parse(localStorage.getItem('cart')))
      }

    } catch (error) {
      console.error(error)
      localStorage.clear()
    }
    console.log(router.pathname)
  }, [router.query])

  useEffect(() => {
    console.log("Second useEffact")
    // if(user.value == null){
    getUser()
    // }
    setKey(Math.random())
  }, [router.pathname === '/'])


  const getUser = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/Account/getUser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `${token}`
        },

      })
      response = await response.json()
      if (response.status === false) {
        localStorage.removeItem('token')
        setUser({ value: null })
        setKey(Math.random())
        router.push('/')
        return;
      }
      setUser({ value: response.data, userInfo: response.userInfo })
    }
  }

  const logOut = () => {
    localStorage.removeItem('token')
    setUser({ value: null })
    setKey(Math.random())
    router.push('/')
  }

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

  const calculateSubtotal = () => {
    let myCart = cart
    let subt = 0;
    let key = Object.keys(myCart)

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

  const buyNow = (itemCode, name, price, size, varient, qty) => {
    let newCart = {}
    newCart[itemCode] = { qty: 1, price, name, size, varient }
    setcart(newCart)
    saveCart(newCart)
    router.push('/checkout')
  }

  // console.log(router.pathname.startsWith('/admin'))

  return (
    <>
      <CacheProvider value={emotionCache}>

        <LoadingBar
          color='#1fbe67'
          progress={progress}
          waitingTime={400}
          onLoaderFinished={() => setProgress(0)}
        />
        {/* router.pathname.startsWith('/admin') !== true &&  */}
        {key && router.pathname.startsWith('/admin') !== true && <Navbar calculateSubtotal={calculateSubtotal} key={key} user={user} logOut={logOut} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} SubTotal={SubTotal} saveCart={saveCart} cart={cart} />}
        <Component {...pageProps} getUser={getUser} calculateSubtotal={calculateSubtotal} user={user} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} SubTotal={SubTotal} saveCart={saveCart} cart={cart} buyNow={buyNow} {...pageProps} />
        {router.pathname.startsWith('/admin') !== true && <Footer />}
      </CacheProvider>
    </>
  )
}   

export default MyApp

MyApp.propTypes = {
  // Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  // pageProps: PropTypes.object.isRequired,
};