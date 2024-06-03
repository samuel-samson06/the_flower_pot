import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { promotions } from '../../fakeData'
import Headings from '../../components/Headings';

function Promotion() {
    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <React.Fragment>

        <div className="mb-10 py-2 px-3 slider-container">
            <Headings heading={"Promotions"}/>
        <Slider {...settings}>
            {promotions.map(function(promotion,index){
                return(
                    <div className='border-l-[5px] border-white border-r-[1px] px-3 py-5 rounded-s-lg bg-gradient-to-tr bg-[#e43d3d] rounded-e-lg text-white' key={index+promotion.id}>
                        {/* <p>Promotion</p> */}
                        <div className=' px-4 w-[280px] h-[130px] flex gap-2 space-x-2  justify-between items-center' key={index+promotion.id}>
                            <img className=' size-[115px]  rounded-full' src={promotion.image} alt="" />
                            <div className=' space-y-2 px-5'>
                                <p className='text-white font-semibold text-xl'>{promotion.flower_name}</p>
                                <button className=' font-semibold uppercase text-xs bg-[#d59f4e] py-1 px-1 rounded-md'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                )
            })}
      </Slider>
    </div>
    </React.Fragment>
  )
}

export default Promotion