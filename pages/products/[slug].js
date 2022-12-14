import React, { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import Product from '../../models/Product'
import mongoose from 'mongoose'
import Error from 'next/error'
import { ToastContainer, toast } from 'react-toastify';
import Head from 'next/head'


const Products = ({ addToCart, product, varients, buyNow, error }) => {
  const router = useRouter()
  const { slug } = router.query
  const heart = useRef()
  const [Pin, setPin] = useState()
  const [Service, setService] = useState()
  const [color, setcolor] = useState()
  const [size, setsize] = useState()

  useEffect(() => {
    console.log(varients)
    if (!error) {
      setcolor(product.color)
      setsize(product.size)
    }
  }, [router.query])


  const like = () => {
    if (heart.current.classList.contains('text-gray-500')) {
      heart.current.classList.remove('text-gray-500')
      heart.current.classList.add('text-green-500')

    } else if (heart.current.classList.contains('text-green-500')) {
      heart.current.classList.remove('text-green-500')
      heart.current.classList.add('text-gray-500')
    }
  }


  const refVarient = (newColor, newSize) => {
    console.log(newColor)
    console.log(newSize)
    // console.log(varients[newSize][newColor[0]]['slug'])
    let url = `${process.env.NEXT_PUBLIC_HOST}/products/${varients[newSize][newColor]['slug']}`
    router.push(url)
  }

  const checkServiceAbility = async () => {
    let pins = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pincodes`)
    let pinsJson = await pins.json()
    if (Object.keys(pinsJson).includes(Pin)) {
      setService(true)
      toast.success('Your Pin Code is serviceable!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (Service == undefined || Service == 'Empty') {
      setService('Empty')
      toast.warn('Please, Enter the pic code to check.', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setService(false)
      toast.error('Sorry, Pin Code not serviceable', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setPin('')
  }
  if (error == 404) {
    return <Error statusCode={404} />
  }
  return (
    <>
      <Head>
        <title>{product.title} - E-Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden min-h-screen">
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
        <div className="container px-5 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/> */}
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto px-16 object-cover object-top rounded"
              src={product.img} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">HSD BRAND</h2>
              <h1 className="text-white text-2xl title-font font-medium mb-1">{product.title} ( {product.color} / {product.size} ) </h1>

              {/* Reviews ICONS  */}

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
                  <a className='fill-blue-600'>
                    <svg strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className='fill-blue-500'>
                    <svg strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className='fill-green-500'>
                    <svg strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>

              {/* Description */}

              <p className="leading-relaxed">{product.desc}</p>

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">

                {/* Colors */}

                <div className="flex">

                  <span className="mr-3">Color</span>
                  {size && Object.keys(varients[size]).map(itemColor => {
                    console.log(size + '  ' + itemColor)
                    return <button onClick={() => refVarient(itemColor, size)} className={`border-2 ml-1 bg-${itemColor}-700 rounded-full w-6 h-6 focus:outline-none transition ease-in-out hover:-translate-y-0.5 hover:scale-110 duration-150 
                    ${itemColor == color && itemColor != "white" ? 'scale-125 border-white' : 'border-gray-700'}
                    ${itemColor == 'black' ? 'border-black' : 'border-gray-700'}`}></button>

                  })}

                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">

                    {/* Sizes */}

                    <select value={size} onChange={(e) => refVarient(Object.keys(varients[e.target.value]), e.target.value)} className="rounded border border-gray-700 focus:ring-2 focus:ring-green-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-green-500 text-gray-400 pl-3 pr-10">
                      {Object.keys(varients).includes('S') && <option value={'S'}>S</option>}
                      {Object.keys(varients).includes('M') && <option value={'M'}>M</option>}
                      {Object.keys(varients).includes('L') && <option value={'L'}>L</option>}
                      {Object.keys(varients).includes('XL') && <option value={'XL'}>XL</option>}
                      {Object.keys(varients).includes('XXL') && <option value={'XXL'}>XXL</option>}
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>

              {product.availableQty > 0 ?
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-white">${product.price}</span>

                  <button disabled={product.availableQty <= 0 && true} onClick={() => buyNow(product.slug, product.title, product.price, product.size, product.color, 1)} className="flex ml-10 text-white bg-green-500 border-0 py-2 px-2 md:px-3 md:ml-20 focus:outline-none hover:bg-green-600 rounded disabled:bg-green-300">Buy Now</button>

                  {/* Add TO Cart */}

                  <button
                    onClick={() => addToCart(product.slug, product.title, product.price, product.size, product.color, 1)}
                    disabled={product.availableQty <= 0 && true}
                    className="flex ml-2 text-white bg-green-500 border-0 py-2 px-2 md:px-6 md:ml-5 focus:outline-none hover:bg-green-600 rounded disabled:bg-green-300"
                  >Add To Cart
                  </button>
                  <button ref={heart} onClick={like} className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 md:ml-4 ml-2">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>

                :
                <p className="leading-relaxed text-2xl font-bold">Item Out of Stock!</p>

              }
              <div className="pincode flex space-x-2 text-sm mt-6">
                <input onChange={(event) => setPin(event.target.value)} placeholder='Enter Your Pin Code' className='px-2 text-black rounded-md border-green-700 focus:outline-none focus:border-green-300 border-2' type="text" />
                <button onClick={checkServiceAbility} className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Check Service</button>
              </div>

              {/* Check Service Ability. */}

              {!Service && Service != null && Service !== 'Empty' && <div className="text-red-700">
                <h3>Sorry,We do not Diliver to this pin code.</h3>
              </div>}
              {Service && Service != null && Service !== 'Empty' && <div className="text-green-700">
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

export async function getServerSideProps(context) {
  if (!mongoose.connection.readyState) {
    mongoose.connect(process.env.MONGO_URI)

  }
  let product = await Product.findOne({ slug: context.query.slug })

  let error = null;
  if (product == null) {
    return {
      props: { error: 404 }
    }
  }

  let varients = await Product.find({ title: product.title })
  let sizeColorSlug = {} // { size: { color: { slug: "Programer T-shirt" } } }

  for (let item of varients) {
    if (Object.keys(sizeColorSlug).includes(item.size)) {
      sizeColorSlug[item.size][item.color] = { slug: item.slug }
    }
    else {
      sizeColorSlug[item.size] = {}
      sizeColorSlug[item.size][item.color] = { slug: item.slug }
      // { size :  }
      // { size : { color : { slug: "Programer T-shirt" } } }
    }
  }

  return {
    props: { error, product: JSON.parse(JSON.stringify(product)), varients: JSON.parse(JSON.stringify(sizeColorSlug)) },
  }
}

export default Products