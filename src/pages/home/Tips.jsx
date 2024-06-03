import React from 'react'
import Headings from '../../components/Headings'

function Tips() {
  return (
    <React.Fragment>
      <div className=' px-3 py-5 sm:py-8 sm:px-5 bg-green-200 my-7 mx-2 rounded-lg'>
        <Headings heading={"Daily Gardening Tip"}/>
        <article className=' px-2 text-sm sm:text-base'>
          Water Your Plants Daily. Keep It under fresh Sunlight and Always make sure your plants have enough moisture in them 
        </article>
        <form action="" className=' mt-3 flex flex-col'>
          <div className=' sm:items-center gap-5 sm:flex-row flex-col flex'>
            <input type="email" className=' sm:w-[80%] px-3 py-2 rounded-md my-5 placeholder:font-semibold font-light outline-none' placeholder='Email Address' />
            <button className=' rounded-md text-sm py-2 px-3 bg-[#d59f4e] text-white'>Subscribe</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Tips