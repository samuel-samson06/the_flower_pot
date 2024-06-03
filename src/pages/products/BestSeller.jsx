import React from 'react'
import image from "../../assets/slide3.png"

function BestSeller() {
  return (
    <React.Fragment>
        <div>
            <p className=" px-3 font-semibold sm:text-lg py-3">Best Seller</p>
            <div className=" justify-evenly py-3 sm:items-center px-1 rounded-md mx-1 bg-gradient-to-tr from-[#6A941E] to-[#B6CE60] flex ">
                <img src={image} className=" w-28 sm:w-36 md:w-40" alt="best seller" />
                <section className=' flex-col flex space-y-2'>
                    <div className='text-white space-y-1 text-sm'>
                        <p className=' font-semibold  text-base'>Lily Vase Bouquet</p>
                        <p className=' font-semibold text-base text-white'>₦18,000</p>
                        <p>Sam Stores</p>    
                    </div>
                    <button className=' shadow-md py-1 font-semibold bg-[#00A86B] text-white rounded-full '>Buy Now</button>
                </section>
            </div>
        </div>
    </React.Fragment>
  )
}

export default BestSeller