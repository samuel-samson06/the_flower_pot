import React, { useEffect } from 'react'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
import logo from "../../assets/test_logo1.png"

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
            <header className=' bg-[#00A86B] text-white text-center text-2xl py-2'>
              <NavLink to="/">
                <img src={logo} className='px-5 w-24 flex items-center justify-center' alt="Logo" />
              </NavLink>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    </React.Fragment>
  )
}

export default AuthLayout