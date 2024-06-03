import React from 'react'
// import {FaFacebook, FaInstagram} from "react-icons/fa"
// import {} from "react-icons/"

function Contact() {
  return (
    <React.Fragment>
        <div>
          <aside></aside>
          <main className=" px-5">
            <p className=" text-2xl text-center font-semibold">Contact Us</p>
            <section>
              <form action="" className="  pb-6 pt-5 flex flex-col items-center gap-3">
                <input type="text" placeholder='Full Name' className="  w-full border-[1px] rounded-md py-2 px-1 bg-gray-50 placeholder:font-semibold placeholder:text-gray-400 border-[#00A86B]"/>
                <input type="text" placeholder='Email' className="  w-full border-[1px] rounded-md py-2 px-1 bg-gray-50 placeholder:font-semibold placeholder:text-gray-400 border-[#00A86B]"/>
                <textarea name="" id="" placeholder='Message' className="  w-full border-[1px] rounded-md py-2 px-1 bg-gray-50 placeholder:font-semibold placeholder:text-gray-400 border-[#00A86B]" rows={3}/>
                <button className=" bg-[#00A86B] text-white font-semibold w-full rounded-md px-2 py-1">Send Message 🌺</button>
              </form>
              <div className="space-y-2 pb-4">
                <p className=' font-semibold'>Email ✉<br /><span className=' font-normal px-1'><a href="mailto:flowerpot@simplesolutions.com">flowerpot@simplesolutions.com</a></span></p>
                <p className=' font-semibold'>Contact 📞<br /><span className=' font-normal px-1'><a href="tel:+2348106407130">+234 810 640 7130</a></span></p>
                <p className=' font-semibold'>Location 📍<br /><span className=' font-normal px-1'>Lagos, Nigeria</span></p>
              </div>
              <div className='pb-8'>
                <p className=' font-semibold text-xl'>Socials</p>
                {/* <section>
                  <FaFacebook/>
                  <FaInstagram/>
                </section> */}
              </div>
            </section>
          </main>
        </div>
    </React.Fragment>
  )
}

export default Contact