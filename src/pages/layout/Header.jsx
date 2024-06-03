import React, { useState } from 'react'
import {BsCart2} from "react-icons/bs"
import { motion } from 'framer-motion'
import Navigation from "./Navigation"
import { NavLink } from 'react-router-dom'
import Categories from './Categories'
import logo from "../../assets/logo.png"
import {MdOutlineAccountCircle} from "react-icons/md"
import {GoPackage} from "react-icons/go"

function Header() {
  const [navTrigger, setNavTrigger] = useState(false)

  const navigation_pages=[{
    id:'2rty33',
    link:'/products',
    icon:<GoPackage className=' text-2xl'/>,
    page:'Products',
  },{
    id:'4rty45',
    link:'/auth',
    icon:<MdOutlineAccountCircle className=' text-2xl'/>,
    page:'Account',
  }]

  //  onclick function
  const triggerNavBar = function(){
    setNavTrigger(true)
  }
  const closeNavTrigger = function(){
    setNavTrigger(false)
  }
  return (
    <React.Fragment>
        <div className='  bg-[#00A86B] fixed w-full mb-20 top-0 text-white max-sm:flex max-sm:justify-between sm:grid  z-10 pt-5 pb-5 sm:pt-5 sm:pb-0 items-center '>
          <motion.div variants={{
            initial:{
              x:-2000
            },
            animate:{
              x:0.1,
              transition:{
                type:'just'
              }
            },
            exit:{
              x:-2000
            }

          }} initial="initial" animate={navTrigger?'animate':'exit'} className=" fixed top-0 h-full">
            <Navigation closeNavBar={closeNavTrigger}/>
          </motion.div>
          <div className=' max-sm:hidden relative w-fit rounded-full '>
            <NavLink to="/">
              <img src={logo} alt="" className=' w-20 px-5' />
            </NavLink>
          </div>
          <div onClick={triggerNavBar} className=' -z-40  px-6 flex flex-col gap-1 sm:hidden'>
            <motion.span variants={{
              initial:{
                rotate:0,
                y:0
              },animate:{
                rotate:45,
                y:3
              },final:{
                rotate:0,
                y:0
              }
            }} initial="initial" animate={navTrigger?"animate":"final"} className=' bg-white rounded-md text-transparent h-0.5 w-5'>.</motion.span>
            <motion.span variants={{
              initial:{
                opacity:1
              },animate:{
                opacity:0
              },final:{
                opacity:1
              }
            }} initial="initial" animate={navTrigger?"animate":"final"} className=' bg-white rounded-md text-transparent h-0.5 w-5'>.</motion.span>
            <motion.span variants={{
              initial:{
                rotate:0
              },animate:{
                rotate:-45,
                y:-8
              },final:{
                rotate:0,
                y:0
              }
            }} initial="initial" animate={navTrigger?"animate":"final"} className=' bg-white rounded-md text-transparent h-0.5 w-5'>.</motion.span>
          </div>
          <aside className=' flex items-center justify-end gap-10  cursor-pointer px-6'>
            <main className=' max-sm:hidden flex gap-2 text-sm   text-white'>
              {
                navigation_pages.map((eachOne)=>{
                  return(
                    <NavLink key={eachOne.id} to={eachOne.link}>
                      <div className={`  px-3 py-2  flex items-center gap-4`}>
                        <div>{eachOne.icon}</div>
                        <p>{eachOne.page}</p>
                      </div>
                    </NavLink>
                  )
                })
              }
            </main>
            <NavLink to="/cart">
              <BsCart2 className=' text-2xl'/>
            </NavLink>
          </aside>
          <section className=' border-t-[2px] py-2 mt-4 mb-2 capitalize font-semibold max-sm:hidden  col-span-2'>
            <Categories/>
          </section>
        </div>
    </React.Fragment>
  )
}

export default Header