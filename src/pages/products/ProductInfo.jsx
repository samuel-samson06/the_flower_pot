import React from 'react'
import {BsTruck} from "react-icons/bs"
import {FaHeadphones} from "react-icons/fa6"
import {CiCreditCard1} from "react-icons/ci"
import {SlBadge} from "react-icons/sl"
function ProductInfo() {
  return (
    <React.Fragment>
        <div className=' grid px-5 md:px-0 gap-8 md:grid-cols-3'>
            <section className=' space-y-1 font-semibold bg-blue-500 px-3 py-2 rounded-md text-white'>
                <p>Store</p>
                <p className=' px-3'>Phone:<span className=' font-normal px-2 text-sm '>(+234) 805 456 7130</span></p>
                <p className=' px-3'>Location:<span className=' font-normal px-2 text-sm '>114, Avenue, UK</span></p>
            </section>
            <section className=' space-y-1 font-semibold bg-yellow-600 px-3 py-2 rounded-md text-white'>
                <p>Delivery</p>
                <ul>
                    <li className=' px-3'>Courier:<span className=' font-normal px-2 text-sm '>2-4 days delivery</span></li>
                    <li className=' px-3'>Local:<span className=' font-normal px-2 text-sm '>1-2 days delivery</span></li>
                    <li className=' px-3'>Export:<span className=' font-normal px-2 text-sm '>7-14 days delivery</span></li>
                </ul>
            </section>
            <section className=' space-y-1 font-semibold bg-[#00A86B] px-3 py-3 rounded-md text-white'>
                <p className=''>Feature</p>
                <main className=' px-2'>
                    <div className='flex gap-3 items-center'>
                        <BsTruck className=' bg-[00A86B]'/>
                        <p>1 Year Warranty </p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <FaHeadphones className=' bg-[00A86B]'/>
                        <p>Free Delivery (1month free)</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <CiCreditCard1 className=' bg-[00A86B]'/>
                        <p>Customer Care Support</p>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <SlBadge className=' bg-[00A86B]'/>
                        <p>Secure Payment</p>
                    </div>
                </main>
            </section>
            
        </div>
    </React.Fragment>
  )
}

export default ProductInfo