import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { sellers } from '../../fakeData'
import Headings from '../../components/Headings';

function TopSellers() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return(
    <React.Fragment>
      
    <div className="mb-10 py-2 px-2 slider-container">
      <Headings heading={"Top Sellers"}/>
      <Slider {...settings}>
          {sellers.map(function(seller,index){
              return(
                  <div className='border-l-[1px] border-white border-r-[1px] px-3 py-5 rounded-md bg-gradient-to-tr bg-[#b60d0d] text-white' key={index+seller.id}>
                      <div className=' px-2 flex  gap-2 space-x-2 ' key={index+seller.id}>
                          <img className=' size-16 rounded-full' src={seller.image} alt="" />
                          <div className=' space-y-1'>
                              <p className='text-white font-semibold text-sm'>Name: <span className=' text-xs'>{seller.name}</span></p>
                              <p className='font-semibold line-clamp-1 text-sm'>Store: <span className=' text-xs'>{seller.store_name}</span></p>
                              <p className='font-semibold line-clamp-1 text-sm'>Sales: <span className=' text-xs'>{seller.sales}</span></p>
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