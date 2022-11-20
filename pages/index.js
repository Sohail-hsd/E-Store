import Head from 'next/head'
import Content from '../components/Content'

export default function Home() {
  return (
    <div>
      <Head>
        <title>E-Store</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.png" />
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
            className=" z-10 w-full h-full absolute opacity-50 bg-black hover:opacity-30 transition ease-linear delay-300"
          ></span>
          <div className='flex text-center'>
            <div className='z-10 py-28 text-5xl font-bold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-green-300 via-green-400 to-gray-500
            animate-text' >
              The Best Products For Programmers
            </div>
          </div>
        </div>
        <div
          className=" z-10 top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
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
