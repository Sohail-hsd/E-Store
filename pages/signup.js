import React from 'react'
import Link from 'next/link'

const Signup = () => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8  bg-gray-900">
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
        <form className="mt-8 space-y-6" action="#" method="POST">

          <div className="rounded-lg shadow-sm space-y-2">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input id="name" name="name" type="name" autocomplete="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-green-300 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Name" />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-green-300 placeholder-gray-500 text-white focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-green-300 placeholder-gray-500 text-white focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Password" />
            </div>
            <div>
              <label htmlFor="confirm" className="sr-only">Confirm Password</label>
              <input id="confirm" name="confirm" type="confirm" autocomplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-green-300 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" />
            </div>
          </div>

          <div>
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* <!-- Heroicon name: solid/lock-closed --> */}
                <svg className="h-5 w-5 text-green-500 group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
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