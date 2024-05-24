/* eslint-disable react/prop-types */
import React from 'react'
import {NavLink} from "react-router-dom"

function ProductsDisplay({data,sliceStart=0,sliceEnd}) {
  return (
    <React.Fragment>
        <div className=' py-5 px-2  gap-5 grid grid-cols-2'>
            {
                data.slice(sliceStart,sliceEnd).map(function(eachData){
                    return (
                        <NavLink key={eachData.id} to={`/${eachData.id}`}>
                            <div  className=' border-[1px] border-[#5f5d5d] shadow-sm rounded-md space-y-2 w-fit  flex flex-col bg-[#eaeaea]'>
                                <img src={eachData.image} className=' border-b-[1px] border-black size-[200px] rounded' alt={eachData.title} />
                                <section className="px-2 py-1 ">
                                    <p className=' capitalize text-sm font-semibold text-zinc-800'>{eachData.title.length>10?eachData.title.slice(0,10)+"...":eachData.title}</p>
                                    <p className=' text-[#00a86b] font-semibold '>{eachData.price}</p>
                                </section>
                                <button className=" bg-[#00A86B] text-white rounded-b-md font-semibold">View Product</button>
                            </div>
                        </NavLink>
                    )
                })
            }
        </div>
        
    </React.Fragment>
  )
}

export default ProductsDisplay