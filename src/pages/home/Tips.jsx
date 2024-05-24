import React from 'react'
import Headings from '../../components/Headings'

function Tips() {
  return (
    <React.Fragment>
      <div className=' px-3 py-5  bg-green-200 my-7 mx-2 rounded-lg'>
        <Headings heading={"Gardening Tip"}/>
        <article className=' font-semibold text-sm'>
          Water Your Plants Daily. Keep It under fresh Sunlight and Always make sure your plants have enough moisture in them 
        </article>
      </div>
    </React.Fragment>
  )
}

export default Tips