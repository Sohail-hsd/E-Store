import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'


const Account = ({ cart, user }) => {
  const router = useRouter()

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/')
    }
    console.log(user)
  }, [])


  return (
    <>
      <main className="profile-page">
        <section className="relative block" style={{ height: "500px" }}>

          {/* Cover Pic */}

          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
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
                className="text-gray-600 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-600">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-gray-900 w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">

                  {/* Profile Pic */}

                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center ">
                    <div className="relative ">
                      <img
                        alt="..."
                        src={'profile2.webp'}
                        className="shadow-lg shadow-green-600 rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16"
                        style={{ maxWidth: "150px" }}
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-green-500 active:bg-green-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-700 duration-300"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        Logout
                      </button>
                      
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8 font-bold">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl block uppercase tracking-wide text-gray-300">
                          22
                        </span>
                        <span className="text-sm text-white">Orders</span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl block uppercase tracking-wide text-gray-300">
                          10
                        </span>
                        <span className="text-sm text-white">Deliverd</span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl block uppercase tracking-wide text-gray-300">
                          {Object.keys(cart).length}
                        </span>
                        <span className="text-sm text-white">Cart</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">

                  {/* UserName */}
                  <h3 className="text-4xl font-semibold leading-normal text-white mb-2">
                    {user.value != null ? user.value.UserName : 'User Name'}
                  </h3>

                  {/* Address */}

                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg "></i>
                    {user.value != null ? user.value.Email : "Email"}
                  </div>

                  {/* Bio */}

                  <div className="mb-2 text-gray-400 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div className="mb-2 text-gray-400">
                    <i className="fas fa-university mr-2 text-lg text-gray-400"></i>
                    University of Computer Science
                  </div>
                </div>

                {/* Description of User */}

                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-400">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a
                        href="#pablo"
                        className="font-normal text-green-500"
                        onClick={e => e.preventDefault()}
                      >
                        Show more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}


export default Account