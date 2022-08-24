import React,{useEffect} from 'react'
import { useRouter } from 'next/router'
import Order from '../models/Order'
import mongoose from 'mongoose'

const Orders = () => {
  const router = useRouter()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/')
    }
  }, [])
  return (
    <div className='bg-gray-900'>
      <div className="container mx-auto bg-slate-600 py-5">
        <h1 className='text-xl font-bold text-white p-3 text-center'>My Orders</h1>
        <div className="flex flex-col ">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full ">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th scope="col" className="text-sm font-medium text-white  px-6 py-4 text-left">
                        #
                      </th>
                      <th scope="col" className="text-sm font-medium text-white  px-6 py-4 text-left">
                        First
                      </th>
                      <th scope="col" className="text-sm font-medium text-white  px-6 py-4 text-left">
                        Last
                      </th>
                      <th scope="col" className="text-sm font-medium text-white  px-6 py-4 text-left">
                        Handle
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-800 border-gray-900 border-b transition duration-300 ease-in-out hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white ">1</td>
                      <td className="text-sm text-white  font-light px-6 py-4 whitespace-nowrap">
                        Mark
                      </td>
                      <td className="text-sm text-white  font-light px-6 py-4 whitespace-nowrap">
                        Otto
                      </td>
                      <td className="text-sm text-white  font-light px-6 py-4 whitespace-nowrap">
                        @mdo
                      </td>
                    </tr>
                    <tr className="bg-gray-800 border-gray-900 border-b transition duration-300 ease-in-out hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white ">2</td>
                      <td className="text-sm text-white  font-light px-6 py-4 whitespace-nowrap">
                        Jacob
                      </td>
                      <td className="text-sm text-white  font-light px-6 py-4 whitespace-nowrap">
                        Thornton
                      </td>
                      <td className="text-sm text-white  font-light px-6 py-4 whitespace-nowrap">
                        @fat
                      </td>
                    </tr>
                    <tr className="bg-gray-800 border-gray-900 border-b transition duration-300 ease-in-out hover:bg-gray-700">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white ">3</td>
                      <td className="text-sm text-white  font-light px-6 py-4 whitespace-nowrap">
                        Larry
                      </td>
                      <td className="text-sm text-white  font-light px-6 py-4 whitespace-nowrap">
                        Wild
                      </td>
                      <td className="text-sm text-white  font-light px-6 py-4 whitespace-nowrap">
                        @twitter
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGO_URI)

  }
  let orders = await Order.find()

  return {
    props: { products: JSON.parse(JSON.stringify(orders)) }, // will be passed to the page component as props
  }
}

export default Orders