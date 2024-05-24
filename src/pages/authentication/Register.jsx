import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Register() {
    const [option, setOption] = useState(["buyer","seller"])
    const [selectedOption, setSelectedOption] = useState(0)
  return (
    <React.Fragment>
        <div>
            <header>
                <h1 className=" text-center text-2xl font-semibold py-2 mb-2">Create An Account</h1>
            </header>
            <aside className=' mx-5 rounded-lg flex items-center justify-evenly gap-7 py-1 px-3 capitalize bg-gray-100 font-medium text-xl'>
                {
                    option.map((eachOption,index)=>{
                        return(
                            <div key={index} onClick={()=>{ setSelectedOption(index)}} className={`${selectedOption===index && " transition-all bg-[#00A86B] text-white shadow-sm "}  py-1 px-6 rounded-lg`} >
                                <p>{eachOption}</p>
                            </div>
                        )
                    })
                }
            </aside>
            <form action="" className=' flex flex-col gap-5 px-5 py-7'>
                <label htmlFor="" className=' capitalize font-medium'>
                    <p>username</p>
                    <input  placeholder='username' type="text" className=' font-normal  shadow-sm placeholder:capitalize w-full py-2 px-2 my-1  outline-none border-[1px] border-gray-200 rounded-lg bg-white' />
                </label>
                <label htmlFor="" className={` ${selectedOption!==1&&"hidden"} capitalize font-medium`}>
                    <p>business name</p>
                    <input placeholder='business name'  type="text" className=' font-normal  shadow-sm placeholder:capitalize w-full py-2 px-2 my-1  outline-none border-[1px] border-gray-200 rounded-lg bg-white' />
                </label>
                <label htmlFor="" className=' capitalize font-medium'>
                    <p>email address</p>
                    <input  placeholder='email address' type="email" className=' shadow-sm font-normal placeholder:capitalize w-full py-2 px-2 my-1  outline-none border-[1px] border-gray-200 rounded-lg bg-white' />
                </label>
                <label htmlFor="" className={` ${selectedOption!==1&&"hidden"} capitalize font-medium`}>
                    <p>phone number</p>
                    <input placeholder='phone number'  type="tel" className=' font-normal  shadow-sm placeholder:capitalize w-full py-2 px-2 my-1  outline-none border-[1px] border-gray-200 rounded-lg bg-white' />
                </label>
                <label htmlFor="" className=' capitalize font-medium'>
                    <p>password</p>
                    <input  placeholder='password' type="password" className=' font-normal  shadow-sm placeholder:capitalize w-full py-2 px-2 my-1  outline-none border-[1px] border-gray-200 rounded-lg bg-white' />
                </label>
                <label htmlFor="" className=' capitalize font-medium'>
                    <p>confirm password</p>
                    <input  placeholder='confirm password' type="password" className=' font-normal  shadow-sm placeholder:capitalize w-full py-2 px-2 my-1  outline-none border-[1px] border-gray-200 rounded-lg bg-white' />
                </label>
                <button className=' bg-[#00A86B] rounded-lg py-1 text-lg text-white'>Sign Up</button>
                <section className=' justify-center font-normal flex items-center'>
                    <p>Have an Account?</p>&nbsp;
                    <NavLink to="/auth/login"><span className=' font-medium'>Sign in</span></NavLink>
                </section>
            </form>
        </div>
    </React.Fragment>
  )
}

export default Register