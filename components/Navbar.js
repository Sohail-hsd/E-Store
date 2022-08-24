import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsFillCartFill, BsFillBagCheckFill, BsFillBellFill } from 'react-icons/bs'
import { AiFillCloseCircle, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { MdAccountCircle } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify';


const Navbar = ({ cart, addToCart, removeFromCart, clearCart, SubTotal, user, logOut }) => {
  const ref = useRef()
  const [dropDown, setdropDown] = useState(false)
  const [notification, setNotification] = useState(false)

  const logout = () => {
    toast.success('Your are Successfully LogOut!', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setTimeout(() => {
      logOut()
    }, 1000);
  }

  const activeCart = () => {
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
      ref.current.classList.add('mr-2')
    }
    else if (ref.current.classList.contains('translate-x-0')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.remove('mr-2')
      ref.current.classList.add('translate-x-full')
    }
  }

  return (
    <div className='z-10 flex flex-col items-center justify-center md:flex-row md:justify-start bg-gray-900 shadow-md shadow-green-400 overflow-visible sticky top-0'>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="logo mx-5 ">
        <Link href={"/"}>
          <a><Image className='transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-150' src={'/blackLogo.png'} width={80} height={80} /></a>
        </Link>
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-6 font-bold md:text-md px-10 text-white'>
          <Link href={'/tshirts'}><a className='transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-150 hover:text-green-400'><li>T-Shirts</li></a></Link>
          <Link href={'/hoodies'}><a className='transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-150 hover:text-green-400'><li>Hoodies</li></a></Link>
          <Link href={'/stickers'}><a className='transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-150 hover:text-green-400'><li>Stickers</li></a></Link>
          <Link href={'/mugs'}><a className='transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-150 hover:text-green-400'><li>Mugs</li></a></Link>
        </ul>
      </div>
      <div ref={ref} className="cart space-x-2 items-center flex absolute right-0 top-7 mx-5 text-green-300 cursor-pointer">

        {/* Notification */}

        <span onClick={() => notification ? setNotification(false) : setNotification(true)}>
          {notification && <div className="absolute rounded-md shadow-green-200 shadow-sm bg-green-200 right-16 top-6 w-56 p-4 py-4 text-black ">
            <span onClick={() => setNotification(false)} className='top-4 right-2 absolute text-2xl cursor-pointer text-red-700'> <AiFillCloseCircle /> </span>
            <ul>
              <li className=' py-1 text-lg hover:text-green-600 font-bold flex flex-row'>
                Notification
              </li>
              <hr className="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
              <li className='transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-150 py-1 text-sm hover:text-green-600 font-bold'>Notifcation Box Is Empty</li>
            </ul>
          </div>}


          {/* Accounts and Cart Icons */}
          {user.value &&
            <BsFillBellFill onClick={() => notification ? setNotification(false) : setNotification(true)} className='text-xl md:text-2xl hover:text-green-400 text-white transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-150 cursor-pointer' />
          }
        </span>

        {/* Accounts */}

        <span onClick={() => dropDown ? setdropDown(false) : setdropDown(true)}>
          {dropDown && <div className="absolute rounded-md shadow-green-200 shadow-sm bg-green-200 right-7 top-6 w-56 p-4 py-4 text-black ">
            <span onClick={() => setdropDown(false)} className='top-4 right-2 absolute text-2xl cursor-pointer text-red-700'> <AiFillCloseCircle /> </span>
            <ul>
              <Link href={'/account'}>
                <li className=' py-1 text-sm hover:text-green-600 font-bold flex flex-row'>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-full w-10"
                    alt="Avatar"
                  />
                  <div className='pl-2'>
                    <p className='text-sm text-gray-600'>{user.value.UserName}</p>
                    <p className='text-sm text-gray-600'>{user.value.Email}</p>
                  </div>
                </li>
              </Link>
              <hr className="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
              <Link href={'/account'}><li className='transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-150 py-1 text-sm hover:text-green-600 font-bold'>My Profile</li></Link>
              <Link href={'/orders'}><li className='transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-150 py-1 text-sm hover:text-green-600 font-bold'>Order</li></Link>
              <Link href={'/account'}><li className='transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-150 py-1 text-sm hover:text-green-600 font-bold'>Setting</li></Link>
              <li onClick={logout} className='transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-150 py-1 text-sm hover:text-green-600 font-bold'>Logout</li>
            </ul>
          </div>}


          {/* Accounts and Cart Icons */}
          {user.value &&
            <MdAccountCircle onClick={() => dropDown ? setdropDown(false) : setdropDown(true)} className='text-xl md:text-2xl hover:text-green-400 text-white cursor-pointer transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-150' />
          }
        </span>
        {!user.value && <Link href={'/login'}>
          <button className=' cursor-pointer text-xl hover:bg-green-600 hover:text-white rounded-md p-1 text-green-400 font-bold mx-2'>Login</button>
        </Link>}
        <BsFillCartFill onClick={activeCart} className='text-xl md:text-2xl hover:text-green-400 text-white transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-150' />
      </div>



      {/* SideBar (Cart) */}

      <div ref={ref} className="cart overflow-y-auto w-72 h-[90vh] absolute top-0 right-0 bg-green-200 px-8 py-10 rounded-md mt-14 transform transition-transform translate-x-full">
        <span onClick={activeCart} className='top-4 right-2 absolute text-2xl cursor-pointer text-red-700'> <AiFillCloseCircle /> </span>
        <h2 className='font-bold text-2xl text-center'>Shoping Cart</h2>
        <ol className='font-semibold list-decimal'>

          {Object.keys(cart).length == 0 && <div className='my-4 font-semibold'>Your Cart is Empty</div>}

          {Object.keys(cart).map((item) => (
            <li key={item}>
              <div className="item flex my-5">
                <div className='w-2/3 ml-1 font-semibold'>{cart[item].name} / {cart[item].varient} ({cart[item].size})</div>
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

        {/* SubTotal */}

        {Object.keys(cart).length != 0 && <div className="sub-total">
          <h3 className='font-semibold'>Total Price : <span className='font-bold'>{SubTotal} </span>$</h3>
        </div>}

        {Object.keys(cart).length != 0 &&
          <div className="flex mt-5">
            <Link href={'/checkout'}>
              <button onClick={activeCart} className="flex mr-2 text-white font-bold bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sm">Checkout <BsFillBagCheckFill className='mt-1 ml-2' /> </button>
            </Link>
            <button disabled={Object.keys(cart).length == 0 ? true : false} onClick={clearCart} className="cursor-pointer flex mr-2 text-white font-bold bg-green-500 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 rounded text-sm disabled:bg-green-400">Clear Cart </button>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar