/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import logo  from "../../assets/logo.png"
import {date} from "../../utils/extras"
import {FaFacebook,FaXTwitter} from "react-icons/fa6"
import { NavLink, useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation()
  const currentlocation = location.pathname.split("/")[1]
  const links=[{
    text:'contact',
    link:'/contact',
    id:'23'
  },{
    text:'faqs',
    link:'/faqs',
    id:'12'
  },{
    text:'policies',
    link:'policies',
    id:'34'
  },{
    text:'about',
    link:'/about',
    id:'54'
  },{
    text:'signup',
    link:'auth/register',
    id:'76'
  },{
    text:'cart',
    link:'/cart',
    id:'367'
  }]
  return (
    <React.Fragment>
        <div className='text-sm grid grid-cols-1  md:grid-cols-4 text-white space-y-3 px-2 py-3 bg-[#00A86B] '>
          <aside className=' md:col-span-2'>
            <img src={logo} className=' w-24' alt="Logo" />
            <br />
          </aside>
          <section className=" md:col-span-2 text-gray-100  px-2  font-semibold gap-1 grid grid-cols-2 sm:grid-cols-3">
            {
              links.map(function(eachLink){
                return (
                  <NavLink to={eachLink.link} key={eachLink.id}>
                    <p className={`${currentlocation===eachLink.text&&"text-gray-50"} sm:text-base md:text-lg capitalize`}>{eachLink.text}</p>
                  </NavLink>
                )
              })
            }
          </section>
          <div className=' md:col-span-4 border-b-[1px] pb-3 border-whit text-transparent'>
            .
          </div>
          <section className=' flex flex-col gap-4 px-3 pt-1 pb-2 '>
            <p className=' font-semibold text-base sm:text-lg '>{date.getFullYear()} &copy; Flower-Pot</p>
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