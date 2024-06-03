import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { sellers } from '../../fakeData'
import Headings from '../../components/Headings';

function TopSellers() {

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

    return(
    <React.Fragment>
      
    <div className="mb-10 py-2 px-2 slider-container">
      <Headings heading={"Top Sellers"}/>
      <Slider {...settings}>
          {sellers.map(function(seller,index){
              return(
                  <div className='border-l-[5px] border-white border-r-[1px] px-3 py-5 sm:py-6 md:py-7 rounded-s-lg rounded-md  bg-gradient-to-tr bg-[#b60d0d] text-white' key={index+seller.id}>
                      <div className=' items-center px-2 flex  gap-2 space-x-2 ' key={index+seller.id}>
                          <img className=' size-16 sm:size-24 md:size-28 rounded-full' src={seller.image} alt="" />
                          <div className=' space-y-1'>
                              <p className='text-white font-semibold text-sm sm:text-base '>Name: <span className=' text-xs sm:text-base sm:font-light'>{seller.name}</span></p>
                              <p className='font-semibold line-clamp-1 text-sm sm:text-base '>Store: <span className=' text-xs sm:text-base sm:font-light'>{seller.store_name}</span></p>
                              <p className='font-semibold line-clamp-1 text-sm sm:text-base '>Sales: <span className=' text-xs sm:text-base sm:font-light'>{seller.sales}</span></p>
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

export default TopSellers