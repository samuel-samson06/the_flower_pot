import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/slide1.png"
import slide2 from "../../assets/slide2.png"
import slide3 from "../../assets/slide3.png"

function Slides() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          speed: 5000,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          dots: true,
          speed: 5000,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          dots: true,
          speed: 5000,
          autoplaySpeed: 2000,
        }
      }
    ]
  };
  return (
    <React.Fragment>
      <div>
        <div className=" h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] rounded-md">
          <Slider {...settings}>
            <div className="border-l-[4px] border-white border-r-[4px] bg-gradient-to-t from-[#6A941E] to-[#B6CE60] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] px-1 rounded-md text-white font-semibold ">
              <div className="flex items-center md:justify-evenly h-full">
                <img src={slide1} className=" w-28 min-[500px]:w-32 sm:w-36 md:w-44 lg:w-48" alt=" sliders" />
                <p className=" text-xs min-[500px]:text-base md:text-xl">Flower Pot has made it easier to buy plants and flowers online by upping the standard.</p>
              </div>
            </div>
            <div className=" border-l-[4px] border-white border-r-[4px] bg-gradient-to-t from-[#6A941E] to-[#B6CE60] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] px-1 rounded-md text-white font-semibold ">
              <div className="flex items-center md:justify-evenly h-full">
                <img src={slide2} className=" w-28 min-[500px]:w-32 sm:w-36 md:w-44 lg:w-48" alt=" sliders" />
                <p className=" text-xs min-[500px]:text-base md:text-xl">Explore Flower Plants curated list of green plants and enjoy <br /> the online plant shopping experience.</p>
              </div>
            </div>
            <div className='border-l-[4px] border-white border-r-[4px] bg-gradient-to-t from-[#6A941E] to-[#B6CE60] h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] px-1 rounded-md text-white font-semibold '>
              <div className=" flex items-center md:justify-evenly h-full">
                <img src={slide3} className=" w-28 min-[500px]:w-32 sm:w-36 md:w-44 lg:w-48" alt=" sliders" />
                <p className=" text-xs min-[500px]:text-base md:text-xl">Plants are a great addition to our homes and life for both their physical and psychological benefits. </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Slides