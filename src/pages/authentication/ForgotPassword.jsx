import React from 'react'
import { NavLink } from 'react-router-dom'

function ForgotPassword() {
  return (
    <React.Fragment>
      <div>
            <header>
                <h1 className=" text-center text-2xl font-semibold py-2 mb-2">Forgot Password</h1>
            </header>
            <form action="" className=' flex flex-col gap-5 px-5 py-7'>
                <label htmlFor="" className=' capitalize font-medium'>
                    <p>email address</p>
                    <input  placeholder='email address' type="email" className=' shadow-sm font-normal placeholder:capitalize w-full py-2 px-2 my-1  outline-none border-[1px] border-gray-200 rounded-lg bg-white' />
                </label>
                <button className=' bg-[#00A86B] rounded-lg py-1 text-lg text-white'>Reset password</button>
                <section className=' justify-center font-normal flex items-center'>
                    <p>Have an Account?</p>&nbsp;
                    <NavLink to="/auth/login"><span className=' font-medium'>Sign in</span></NavLink>
                </section>
            </form>
        </div>
    </React.Fragment>
  )
}

export default ForgotPassword