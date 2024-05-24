/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import logo  from "../../assets/test_logo1.png"
import {date} from "../../utils/extras"
import {FaFacebook,FaXTwitter} from "react-icons/fa6"
import { NavLink } from 'react-router-dom'

function Footer() {
  
  return (
    <React.Fragment>
        <div className='text-sm flex flex-col text-white space-y-3 px-2 py-3 bg-[#00A86B] '>
          <aside>
            <img src={logo} alt="" />
            <br />
          </aside>
          <section className=" text-gray-100 border-b-[1px] pb-3 border-white px-2  font-semibold gap-1 grid grid-cols-2">
            <NavLink to={"/contact"}><p className=' text-white'>Contact</p></NavLink>
            <p>FAQs</p>
            <p>Policies</p>
            <p>About</p>
            <p className=' text-white'>Signup</p>
            <p className=' text-white'>View Cart</p>
          </section>
          <section className=' flex flex-col gap-4 px-3 pt-1 pb-2 '>
            <p className=' font-semibold text-base'>{date.getFullYear()} &copy; Flower-Pot</p>
            <nav className=' flex gap-3 items-center '>
              <FaFacebook className=' text-xl'/>
              <FaXTwitter className=' text-xl'/>
            </nav>
          </section>
        </div>
    </React.Fragment>
  )
}

export default Footer