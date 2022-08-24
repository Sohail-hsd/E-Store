import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [ConPassword, setConPassword] = useState('')
  const router = useRouter()

  useEffect(() => {
    if(localStorage.getItem('token')){
      router.push('/')
    }
  }, [])
  

  const signup = async (event) => {
    event.preventDefault()
    const signupData = { name, email, password }
    if (password !== ConPassword) {
      toast.warn('Your Password dose not match with Confirm Password', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {

      try {
        let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/Account/signup`, {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(signupData),
        })
        response = await response.json()
        if (response.status === true) {
          toast.success('Your account has been created!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setName('')
          setEmail('')
          setPassword('')
          setConPassword('')
          setTimeout(() => {
            router.push('/sigin')
          }, 2000);
        } else {
          toast.error('Please try Again, With a valid email address', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      } catch (error) {
        console.log('Internal Server Error')
      }
    }

  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8  bg-gray-900">
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
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto green-pic"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">SignUp in to create your account</h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link href={'/login'}>
              <a className="font-medium text-green-600 hover:text-green-500"> Signin </a>
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={signup} method="POST">

          <div className="rounded-lg shadow-sm space-y-2">
            <div>
              <label htmlFor="name" className="sr-only">name</label>
              <input onChange={(event) => setName(event.target.value)} value={name} id="name" name="name" type="name" autoComplete="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-green-300 placeholder-gray-500 text-black rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="name" />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">email address</label>
              <input onChange={(event) => setEmail(event.target.value)} value={email} id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-green-300 placeholder-gray-500 text-black focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">password</label>
              <input onChange={(event) => setPassword(event.target.value)} value={password} id="password" name="password" type="password" autoComplete='password' required className="appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-green-300 placeholder-gray-500 text-black focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="password" />
            </div>
            <div>
              <label htmlFor="confirm" className="sr-only">Confirm password</label>
              <input onChange={(event) => setConPassword(event.target.value)} value={ConPassword} id="confirm" name="confirm" type="password" autoComplete='password' required className={`appearance-none rounded-none relative block w-full px-3 py-2 border-2 border-green-300 placeholder-gray-500 text-black rounded-b-md focus:z-10 sm:text-sm focus:outline-none
            ${(password === ConPassword && password !== '') ? 'focus:ring-green-500 focus:border-green-500' : 'ring-red-500 border-red-500 border-3'}`}
                placeholder="Confirm password" />
              <label htmlFor=""></label>
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <!-- Heroicon name: solid/lock-closed --> */}
                <svg className="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              </span>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup