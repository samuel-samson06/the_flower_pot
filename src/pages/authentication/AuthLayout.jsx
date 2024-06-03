import React, { useEffect } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import logo from "../../assets/logo.png"
import logo_image from "../../assets/login_image.png"

function AuthLayout() {
  const navigate = useNavigate()
  const location =useLocation()
  useEffect(function(){
    if(location.pathname==="/auth"){
      navigate("register")
    }
  },[])
  return (
    <React.Fragment>
        <div>
            <header className=' bg-[#00A86B] text-white text-center text-2xl py-1'>
              <div className=' w-fit'>
                <NavLink to="/">
                  <img src={logo} className='px-5 w-24 flex items-center justify-center' alt="Logo" />
                </NavLink>
              </div>
            </header>
            <main className=' flex gap-5 rounded-s-md md:px-16 xl:px-0 lg:h-screen'>
              <img className=' max-xl:hidden w-[50%]' src={logo_image} alt="" />
              <div className='w-[50%] max-xl:w-full overflow-auto'>
                <Outlet/>
              </div>
            </main>
        </div>
    </React.Fragment>
  )
}

export default AuthLayout