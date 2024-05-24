import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <React.Fragment>
        <div>
          <header>
              <h1 className=" text-center text-2xl font-semibold py-8">Sign into your Account</h1>
          </header>
          <form action="" className=' flex flex-col gap-5 px-5 py-7'>                
              <label htmlFor="" className=' capitalize font-medium'>
                  <p>email address</p>
                  <input  placeholder='email address' type="email" className=' shadow-sm font-normal placeholder:capitalize w-full py-2 px-2 my-1  outline-none border-[1px] border-gray-200 rounded-lg bg-white' />
              </label>
              <label htmlFor="" className=' capitalize font-medium'>
                <p>password</p>
                <input  placeholder='password' type="password" className=' font-normal  shadow-sm placeholder:capitalize w-full py-2 px-2 my-1  outline-none border-[1px] border-gray-200 rounded-lg bg-white' />
              </label>
              <section className=' text-gray-700'>
                <NavLink to="/auth/forgot-password"><span className=' font-medium'>Forgot password</span></NavLink>
              </section>
              <button className=' bg-[#00A86B] rounded-lg py-1 text-lg text-white'>Sign in</button>
              <section className=' justify-center font-normal flex items-center'>
                <p className=' text-gray-700'>Not Registered ?</p>&nbsp;
                <NavLink to="/auth/register"><span className=' font-medium'>Sign up</span></NavLink>
              </section>
            </form>
        </div>
    </React.Fragment>
  )
}

export default Login