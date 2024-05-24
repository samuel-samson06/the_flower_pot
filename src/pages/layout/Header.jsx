import React, { useState } from 'react'
import {BsCart2} from "react-icons/bs"
import { motion } from 'framer-motion'
import Navigation from "./Navigation"

function Header() {
  const [navTrigger, setNavTrigger] = useState(false)

  //  onclick function
  const triggerNavBar = function(){
    setNavTrigger(true)
  }
  const closeNavTrigger = function(){
    setNavTrigger(false)
  }
  return (
    <React.Fragment>
        <div className=' bg-[#00A86B] fixed w-full mb-20 top-0 text-white  flex justify-between  z-10 py-5 items-center '>
          <motion.div variants={{
            initial:{
              x:-1000
            },
            animate:{
              x:0.1,
              transition:{
                type:'just'
              }
            },
            exit:{
              x:-1000
            }

          }} initial="initial" animate={navTrigger?'animate':'exit'} className=" fixed top-0 h-full">
            <Navigation closeNavBar={closeNavTrigger}/>
          </motion.div>
          <div onClick={triggerNavBar} className=' -z-40  px-6 flex flex-col gap-1'>
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
          <aside className=' px-6'>
              <BsCart2 className=' text-2xl'/>
          </aside>
        </div>
    </React.Fragment>
  )
}

export default Header