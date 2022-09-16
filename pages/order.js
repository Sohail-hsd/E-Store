import React from 'react'
import { useRouter } from 'next/router'
import Order from '../models/Order'
import mongoose from 'mongoose'

const MyOrder = ({ order }) => {
    const products = order.products

  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-16 mx-auto">
        <div className="lg:w-5/4 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">HSD Store</h2>
            <h1 className="text-white text-3xl title-font font-medium mb-4">Order id : {order.orderID}</h1>

            <p className="leading-relaxed ">Your order has been successfully placed.</p>
            <p className="leading-relaxed mb-4">Your payment status is : <span className={`font-bold leading-tight ${order.status === 'Pending'?'text-yellow-500': 'text-green-600'}`}>{order.status}</span>  </p>

            {/* Order Table */}


            <div className="overflow-x-auto relative">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="flex-grow border-b-2 border-green-500 py-3 px-6">
                      Order
                    </th>
                    <th scope="col" className="flex-grow border-b-2 border-green-500 py-3 px-6">
                      Color
                    </th>
                    <th scope="col" className="flex-grow border-b-2 border-green-500 py-3 px-6">
                      Quantity
                    </th>
                    <th scope="col" className="flex-grow border-b-2 border-green-500 py-3 px-6">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(products).map(item => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {products[item].name} ( {products[item].size}  )
                      </th>
                      <td className="py-4 px-6">
                        {products[item].varient}
                      </td>
                      <td className="py-4 px-6 text-center">
                        {products[item].qty}
                      </td>
                      <td className="py-4 px-6">
                        $ {parseFloat(products[item].price).toFixed(2)}
                      </td>
                    </tr>))}
                    
                  <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <span className="title-font font-medium text-2xl text-white"> Total Price </span>
                    </th>
                    <td className="py-4 px-6">

                    </td>
                    <td className="py-4 px-6">

                    </td>
                    <td className="py-4 px-6">
                      <span className="title-font font-medium text-2xl text-white"> ${order.amount}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex ">
              <button className="flex my-3 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Track Order</button>
            </div>
          </div>
          <iframe title="map" className="img-filter lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" frameBorder="0" marginHeight="0" marginWidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed">
            {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" /> */}
          </iframe>
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps(context) {
  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGO_URI)

  }
  let order = await Order.findById(context.query.id)

  return {
    props: { order: JSON.parse(JSON.stringify(order)) },
  }
}

export default MyOrder