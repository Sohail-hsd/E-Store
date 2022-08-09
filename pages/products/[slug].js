import React, { useState, useRef } from 'react'
import { useRouter } from 'next/router'

const Product = ({ addToCart }) => {
  const router = useRouter()
  const { slug } = router.query
  const heart = useRef()
  const [Pin, setPin] = useState()
  const [Service, setService] = useState()

  const like = () => {
    if (heart.current.classList.contains('text-gray-500')) {
      heart.current.classList.remove('text-gray-500')
      heart.current.classList.add('text-green-500')

    } else if (heart.current.classList.contains('text-green-500')) {
      heart.current.classList.remove('text-green-500')
      heart.current.classList.add('text-gray-500')
    }
  }

  const checkServiceAbility = async () => {
    let pins = await fetch('http://localhost:3000/api/pincode')
    let pinsJson = await pins.json()
    if (pinsJson.includes(parseInt(Pin))) {
      setService(true)
    } else if (Pin == undefined) {
      setService('Empty')
    } else {
      setService(false)
    }
    setPin('')
  }

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/> */}
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto px-16 object-cover object-top rounded"
              src={`/${slug}.jpg`} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">HSD BRAND</h2>
              <h1 className="text-white text-3xl title-font font-medium mb-1">{slug} (Ware the Code)</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-green-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-green-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-green-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-green-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-green-400" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-800 text-gray-500 space-x-2">
                  <a>
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a>
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-800 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border border-gray-700 focus:ring-2 focus:ring-green-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-green-500 text-gray-400 pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-white">$58.00</span>

                <button className="flex ml-10 text-white bg-green-500 border-0 py-2 px-2 md:px-3 md:ml-20 focus:outline-none hover:bg-green-600 rounded">Buy Now</button>

                {/* Add TO Cart */}

                <button
                  onClick={() => addToCart('check', 'Tshirt', 58, 'Xl', 'red', 1)}
                  className="flex ml-2 text-white bg-green-500 border-0 py-2 px-2 md:px-6 md:ml-5 focus:outline-none hover:bg-green-600 rounded"
                >Add To Cart
                </button>
                <button ref={heart} onClick={like} className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 md:ml-4 ml-2">
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <dev className="pincode flex space-x-2 text-sm mt-6">
                <input onChange={(event) => setPin(event.target.value)} placeholder='Enter Your Pin Code' className='px-2 text-black rounded-md border-green-700 focus:outline-none focus:border-green-300 border-2' type="text" />
                <button onClick={checkServiceAbility} className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Check Service</button>
              </dev>

              {/* Check Service Ability. */}

              {!Service && Service != null && Service != 'Empty' && <div className="text-red-700">
                <h3>Sorry,We do not Diliver to this pin code.</h3>
              </div>}
              {Service && Service != null && Service != 'Empty' && <div className="text-green-700">
                <h3>We Diliver to this pin code.</h3>
              </div>}

              {Service == 'Empty' && <div className="text-yellow-600">
                <h3>Please, Enter the pin code.</h3>
              </div>}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Product