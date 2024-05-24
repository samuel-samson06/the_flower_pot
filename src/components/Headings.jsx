/* eslint-disable react/prop-types */
import React from 'react'

function Headings({heading}) {
  return (
    <React.Fragment>
        <p className=' font-semibold text-xl py-2'>{heading}</p>
    </React.Fragment>
  )
}

export default Headings