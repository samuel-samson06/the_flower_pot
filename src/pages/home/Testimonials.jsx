import React from 'react'
import { testimonials } from '../../fakeData'
import Headings from '../../components/Headings'

function Testimonials() {
  return (
    <React.Fragment>
      <div className=' px-5 space-y-2'>
        <Headings heading={"Testimonials"}/>
        <div className=' grid min-[500px]:grid-cols-2  md:grid-cols-4  gap-6 px-3 '>
          {
            testimonials.map((eachTestimonial,index)=>{
              return(
                <div className=' rounded-lg py-5 px-3 flex flex-col items-center justify-center gap-2 bg-gray-100' key={index+"$$%%##"}>
                  <img src={eachTestimonial.image} className='  rounded-full' alt={"Testimonial"+index+1} />
                  <p className=' font-sans font-semibold text-base'>{eachTestimonial.name}</p>
                  <article className=' text-xs text-center'>
                    {eachTestimonial.testimonial}
                  </article>
                </div>
              )
            })
          }
        </div>
      </div>
    </React.Fragment>
  )
}

export default Testimonials