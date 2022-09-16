import Head from 'next/head'
import Content from '../components/Content'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'

export default function Home() {
  // const [PublishableKey, setPublishableKey] = useState(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  // useEffect(() => {
  //   fetch(`${process.env.NEXT_PUBLIC_HOST}/api/Stripe/keys`, {
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' }
  //   }).then((res) => res.json())
  //     .then(data => setPublishableKey(data.PublishableKey))
  // }, [])

  // if (!PublishableKey) {
  //   return 'Loading....'
  // }
  // const stripe = loadStripe(PublishableKey)

  return (
    <div>
      <Head>
        <title>E-Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="relative block" style={{ height: "500px" }}>

        {/* Cover Pic */}

        <div
          className="absolute top-0 w-full h-full bg-center bg-cover "
          style={{
            backgroundImage:
              // "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
              "url('/cover.jpg')"
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-50 bg-black hover:opacity-30 transition ease-linear delay-300"
          ></span>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-900 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      {/* Content */}

      <Content />

    </div >
  )
}
