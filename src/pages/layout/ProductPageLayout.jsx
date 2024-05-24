import React from 'react'
import NavigateBack from '../../components/NavigateBack'
import {BsCart2} from "react-icons/bs"
import { Outlet } from 'react-router-dom'


function ProductPageLayout() {
  return (
    <React.Fragment>
        <header className=' bg-[#00A86B] py-3 px-4 text-white flex justify-between items-center '>
            <NavigateBack/>
            <p className=' font-semibold text-lg'>Product Details</p>
            <BsCart2 className=' text-2xl'/>
        </header>
        <main>
            <Outlet/>
        </main>
    </React.Fragment>
  )
}

export default ProductPageLayout