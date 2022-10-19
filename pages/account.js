import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import EditForm from '../components/EditForm'

const Account = ({ cart, user, getUser }) => {
  const router = useRouter()
  const [image, setImage] = useState(null);
  const [sideNav, setSideNav] = useState(false);
  // const [user, setUser] = useState({value : null})
  const [createObjectURL, setCreateObjectURL] = useState(null);


  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    // console.log("file", image)
    body.append("file", image);
    const response = await fetch("/api/upload", {
      method: "POST",
      body
    });
  };

  useEffect(() => {
    console.log("Account useEffact")
    if (!localStorage.getItem('token')) {
      router.push('/')
    }
    getUser()
  }, [router.pathname === '/account'])


  return (
    <>
      <main className="profile-page">
        <section className="relative" style={{ height: "450px" }}>

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


        <section className="flex bg-gray-600">
          {/* Side Bar */}
          <div className="vh-full w-72 mb-6 relative ml-3 rounded-lg shadow-md dark:bg-gray-900 dark:text-white -mt-64" id="sidenavSecExample">

            {/* Headding Section */}
            <div className="pt-4 pb-2 px-6">
              <a href="#!">
                <div className="flex items-center">
                  <div className="shrink-0">
                    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" className="rounded-full w-10" alt="Avatar" />
                  </div>
                  <div className="grow ml-3">
                    <p className="text-sm font-semibold text-blue-600">{user.value !== null && user.value.Email}</p>
                  </div>
                </div>
              </a>
            </div>

            <ul className="relative px-1">
              <li className="relative" onClick={() => setSideNav("Profile")}>
                <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden dark:text-white active:text-green-600 text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                  </svg>
                  <span>Profile</span>
                </a>
              </li>

              <li className="relative" onClick={() => setSideNav("Edit Profile")}>
                <a className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden active:text-green-600 dark:text-white text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" className="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                  </svg>
                  <span>Edit Profile</span>
                </a>
              </li>

            </ul>

          </div>
          
          {/* Main Contant */}
          
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
                    <div className="flex justify-center py-1 lg:pt-2 pt-8 font-bold">
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
                  {sideNav === "Edit Profile" ?
                    <div>

                      <EditForm  user={user}/>

                    </div>
                    :

                    <div>

                      <h3 className="text-4xl font-semibold leading-normal text-white mb-2">
                        {user.value !== null ? user.value.UserName : 'User Name'}
                      </h3>

                      <div className="text-sm leading-normal mt-0 mb-2 text-gray-400 font-bold uppercase">
                        <i className="fas fa-map-marker-alt mr-2 text-lg "></i>
                        {user.value !== null ? user.value.Email : "Email"}
                      </div>



                      <div className="mb-2 text-gray-400 mt-1">
                        <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>
                        Address : {user.value !== null ? user.value.address : "address"}
                      </div>
                      <div className="mb-2 text-gray-400 mt-1">
                        <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>
                        City : {user.value !== null ? user.value.city : "city"}
                      </div>
                      <div className="mb-2 text-gray-400 mt-1">
                        <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>
                        Phone : {user.value !== null ? user.value.phone : "Phone"}
                      </div>
                      <div className="mb-2 text-gray-400 mt-1">
                        <i className="fas fa-briefcase mr-2 text-lg text-gray-400"></i>
                        Area Pin Code : {user.value !== null ? user.value.areaPinCode : "Area Pin Code"}
                      </div>
                      <div className="mb-2 text-gray-400">
                        <i className="fas fa-university mr-2 text-lg text-gray-400"></i>
                        University of Computer Science
                      </div>
                    </div>}

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
          </div>
        </section>
      </main>
    </>
  )
}


export default Account