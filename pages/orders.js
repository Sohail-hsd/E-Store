import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
// import mongoose from 'mongoose'

const Orders = () => {
  const router = useRouter()
  const [myOrders, setmyOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      let response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/myOrders`, {
        method: 'GET', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        },
        // body: JSON.stringify({ token: localStorage.getItem('token') }),
      })
      let res = await response.json()
      setmyOrders(res.orders)
    }
    if (!localStorage.getItem('token')) {
      router.push('/')
    } else {
      fetchOrders()
    }
  }, [])
  return (



    <div className="min-h-screen overflow-x-auto relative shadow-md sm:rounded-lg bg-gray-900">

      {/* <div className="mt-5 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src="/blackLogo.png" alt="Man looking at item at a store" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
            <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers htmlFor your new business</a>
            <p className="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
          </div>
        </div>
      </div> */}
      <h1 className='text-center my-4 text-5xl font-bold leading-tight text-white' >Your Orders</h1>

      <div className="flex justify-between  mt-5 items-center pb-4">

        {/* Search input defaultChecked */}

        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
          </div>

          <input type="text" id="table-search" className="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Orders" />

        </div>

      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mb-28">

        {/* Headding Rows */}

        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="p-4">
              <div className="flex items-center">
                {/* <input defaultChecked id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                      <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label> */}
              </div>
            </th>
            <th scope="col" className="py-3 px-6">
              Order ID
            </th>
            <th scope="col" className="py-3 px-6">
              User Name
            </th>
            <th scope="col" className="py-3 px-6">
              Address
            </th>
            <th scope="col" className="py-3 px-6">
              Amount
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>


        <tbody>
          {/* myOrders map here */}

          {myOrders.map(item => (
            <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="p-4 w-4">
                {/* <div className="flex items-center">
                  <input readOnly={true} checked={item.status === 'Paid' ? true: false} id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100  border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div> */}
              </td>
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.orderID}
              </th>
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
              </th>
              <td className="py-4 px-6 ">
                {item.address}
              </td>
              <td className="py-4 px-6">
                ${item.amount}
              </td>
              <td className={`py-4 px-6 ${item.status === 'Pending' ? 'text-yellow-400' : 'text-green-400'}`}>
                {item.status}
              </td>
              <td className="py-4 px-6">
                <Link href={`/order/?id=${item._id}`} ><a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Order</a></Link>
              </td>
            </tr>
          ))}


        </tbody>
      </table>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   if (!mongoose.connection.readyState) {
//     await mongoose.connect(process.env.MONGO_URI)

//   }

//   return {
//     props: { }, // will be passed to the page component as props
//   }
// }

export default Orders