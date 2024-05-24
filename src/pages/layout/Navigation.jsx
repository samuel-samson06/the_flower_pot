/* eslint-disable react/prop-types */
import React from 'react'
import {MdOutlineAccountCircle} from "react-icons/md"
import {AiOutlineHome} from "react-icons/ai"
import {GoPackage} from "react-icons/go"
import {FcAbout}from "react-icons/fc"
import { NavLink, useLocation } from 'react-router-dom'



const navigation_pages=[{
  id:'1rty12',
  link:'/',
  icon:<AiOutlineHome className=' text-2xl'/>,
  page:'Home'
},{
  id:'2rty33',
  link:'/products',
  icon:<GoPackage className=' text-2xl'/>,
  page:'Products',
},{
  id:'3rty34',
  link:'/about',
  icon:<FcAbout className=' text-2xl'/>,
  page:'About Us',
},{
  id:'4rty45',
  link:'/auth',
  icon:<MdOutlineAccountCircle className=' text-2xl'/>,
  page:'Account',
}]

const categories = [
  {
    category:'all'
  },
  {
    category:'plants'
  },
  {
    category:'bouquets'
  },
  {
    category:'gifts'
  },
  {
    category:'roses' 
  },
  {
    category:'ferns'
  }
]

function Navigation({closeNavBar}) {
  const current_location = useLocation()
  return (
    <React.Fragment>
      <div className=' text-black  bg-gray-100 h-full bg-transparent flex w-screen  mx-0'>
        <div className=' relative pb-5 w-3/4 overflow-scroll bg-[#fff]'>
          <section className=''>
            <header className=' px-4 py-2 items-center flex justify-between  text-white bg-[#00A86B]'>
              <p>The Logo</p>
              <p className=' text-3xl' onClick={closeNavBar}>×</p>
            </header>
            <main className=' flex flex-col gap-4 text-lg pt-3  text-zinc-800'>
              {
                navigation_pages.map((eachOne)=>{
                  return(
                    <NavLink key={eachOne.id} to={eachOne.link}>
                      <div onClick={closeNavBar} className={`  px-3 py-2 ${eachOne.link===current_location.pathname && " bg-gray-100 text-black border-l-[6px] border-[#00A86B]"} flex items-center gap-4`}>
                        <div>{eachOne.icon}</div>
                        <p>{eachOne.page}</p>
                      </div>
                    </NavLink>
                  )
                })
              }
            </main>
            <section className=' border-t-[1px] py-3 px-2 border-gray-300'>
              <p className=' font-semibold text-lg pt-2 pb-1'>Categories</p>
              <main className=' px-4 space-y-2 capitalize'>
                {
                  categories.map(function(eachCategory,index){
                    return(
                      <div key={index+"9978#"}>
                        <p>{eachCategory.category}</p>
                      </div>
                    )
                  })
                }
              </main>
            </section>
          </section>
        </div>
        <div className=' bg-black w-3/12 bg-opacity-70'>.</div>
      </div>
    </React.Fragment>
  )
}

export default Navigation