import React from 'react'

const Order = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-16 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">HSD Store</h2>
            <h1 className="text-white text-3xl title-font font-medium mb-4">Order id : 12993003</h1>

            <p className="leading-relaxed mb-4">Your order has been successfully placed.</p>

            <div className="items-baseline">
              <div className="flex mb-4">
                <a className="flex-grow text-center border-b-2 border-green-500 py-2 text-lg px-1">Order</a>
                <a className="flex-grow text-center border-b-2 border-green-500 py-2 text-lg px-1">Quantity</a>
                <a className="flex-grow text-center border-b-2 border-green-500 py-2 text-lg px-1">Item total</a>
              </div>

              <div className="flex border-t border-gray-800 py-2">
                <span className="text-gray-500">T-shirt</span>
                <span className="ml-auto text-white">6</span>
                <span className="ml-auto text-white">59$</span>
              </div>
              <div className="flex border-t border-gray-800 py-2">
                <span className="text-gray-500">Hoodies</span>
                <span className="ml-auto text-white">3</span>
                <span className="ml-auto text-white">99$</span>
              </div>
              <div className="flex border-t border-gray-800 py-2">
                <span className="text-gray-500">Mug</span>
                <span className="ml-auto text-white">1</span>
                <span className="ml-auto text-white">5$</span>
              </div>
              <div className="flex border-t border-gray-800 py-2">
                <span className="text-gray-500">Stickers</span>
                <span className="ml-auto text-white">10</span>
                <span className="ml-auto text-white">50$</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="title-font font-medium text-2xl text-white">Subtotal : $58.00</span>
              <div>
                <button className="flex my-3 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Track Order</button>
              </div>
            </div>
          </div>
          <iframe title="map" className="img-filter lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed">
            {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" /> */}
          </iframe>
        </div>
      </div>
    </section>
  )
}

export default Order