import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { useRouter } from 'next/router'

const Checkout = ({ cart, removeFromCart, addToCart, SubTotal, clearCart }) => {
  const [Name, setName] = useState('')
  const [Email, setEmail] = useState('')
  const [Phone, setPhone] = useState('')
  const [City, setCity] = useState('')
  const [State, setState] = useState('')
  const [Pin, setPin] = useState('')
  const [Address, setAddress] = useState('')
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem('cart') == '{}') {
      router.push('/')
    }
  }, [])

  const checkout_order = () => {

  }

  return (
    <div>
      <section className="flex text-gray-400 font-semibold bg-gray-900 body-font">
        <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/2 md:w-1/2 flex flex-col w-full md:py-8 mt-8 md:mt-0">

            <h2 className="text-white text-3xl mb-5 font-bold title-font">Checkout</h2>
            <h2 className="text-white text-lg mb-1 font-medium title-font">1. Delivery Detials</h2>
            <p className="leading-relaxed mb-5">Fill the following detials to delivery your order.</p>

            <form method='POST' onSubmit={checkout_order}>
              {/* Name and Email */}

              <div className="relative mb-4 flex space-x-4 items-center">
                <label htmlFor="name" className="leading-7 text-sm text-gray-400 font-semibold">Name</label>
                <input value={Name} onChange={(event) => setName(event.target.value)} type="text" id="name" placeholder='Name' name="name" className="w-1/2 bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                <label htmlFor="email" className="leading-7 text-sm text-gray-400 font-semibold">Email</label>
                <input value={Email} onChange={(event) => setEmail(event.target.value)} type="email" placeholder='Email@gmail.com' id="email" name="email" className="w-1/2 bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

              </div>

              {/* Phone and Pin */}

              <div className="relative mb-4 flex space-x-4 items-center">
                <label htmlFor="phone" className="leading-7 text-sm text-gray-400 font-semibold">Phone</label>
                <input value={Phone} onChange={(event) => setPhone(event.target.value)} type="tel" id="phone" placeholder='032229999000' phone="phone" className="w-1/2 bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                <label htmlFor="pincode" className="leading-7 text-sm text-gray-400 font-semibold">Pin</label>
                <input value={Pin} onChange={(event) => setPin(event.target.value)} type="tel" placeholder='Pin Code' id="pincode" name="pincode" className="w-1/2 bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />


              </div>


              {/* State and City. */}

              <div className="relative mb-4 flex space-x-4 items-center">
                <label htmlFor="state" className="leading-7 text-sm text-gray-400 font-semibold">State</label>
                <input value={State} onChange={(event) => setState(event.target.value)} type="text" id="state" placeholder='State (Albany)' state="state" className="w-1/2 bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={false} />

                <label htmlFor="city" className="leading-7 text-sm text-gray-400 font-semibold">City</label>
                <input value={City} onChange={(event) => setCity(event.target.value)} type="text" id="city" placeholder='City (New Yark)' name="city" className="w-1/2 bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly={false} />

              </div>
              <div className="relative mb-4">
                <label htmlFor="address" className="leading-7 text-sm text-gray-400 font-semibold">Address</label>
                <input value={Address} onChange={(event) => setAddress(event.target.value)} type="address" id="address" placeholder='Address' name="address" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
            </form>
            {/* Review Cart Items */}




            {/* <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg" type='submitt'>Submitt</button> */}

            <Link href={'/order'}>
              <button
                className="item-center text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg disabled:bg-green-300"
                type='submitt'
                disabled={Name && Email && Phone && City && Pin && Address ? false : true}
              >
                Pay,  ${SubTotal}  </button>
            </Link>

            <p className="text-xs text-gray-400 font-semibold text-opacity-90 mt-3">
              Your Order will deliver to you, Soon!
            </p>
          </div>

          <div className='mt-24 md:w-auto w-full md:ml-auto'>
            <h2 className="flex text-white text-lg mb-1 font-medium title-font">2. Reviews Cart Items</h2>
            <div className="cart text-black bg-green-200 px-5 py-2 mb-3 md:h-[45vh] md:w-[550px] rounded-md overflow-auto" >
              <ol className='font-semibold list-decimal md:ml-2'>

                {Object.keys(cart).length == 0 && <div className='my-4 font-semibold'>Your Cart is Empty</div>}

                {Object.keys(cart).map((item) => (
                  <li key={item}>
                    <div className="item flex my-5">
                      <div className='w-2/3 font-semibold'>{cart[item].name} ({cart[item].varient}/ {cart[item].size})</div>
                      <div className="icon  flex justify-center items-center w-1/3 text-xl space-x-2">

                        <AiFillMinusCircle
                          className='cursor-pointer'
                          onClick={() => removeFromCart(item, cart[item].name, cart[item].prise, cart[item].size, cart[item].varient, 1)} />
                        <span className='font-bold text-2xl'>
                          {cart[item].qty}
                        </span>
                        <AiFillPlusCircle
                          className='cursor-pointer'
                          onClick={() => addToCart(item, cart[item].name, cart[item].prise, cart[item].size, cart[item].varient, 1)}
                        />
                      </div>
                    </div>
                  </li>

                ))}
              </ol>



            </div>
            {/* SubTotal */}

            <div className='overflow-visible sticky top-0'>
              <hr className="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
              {SubTotal != 0 && <div className="sub-total">
                <h3 className='font-semibold'>Total Price : <span className='font-bold'>{SubTotal} </span>$</h3>
              </div>}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Checkout