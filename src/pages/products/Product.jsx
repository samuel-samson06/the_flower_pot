import React, { useState } from 'react'
import { flowersData } from '../../fakeData'
import { useParams } from 'react-router-dom'
import ProductsDisplay from '../../components/ProductsDisplay'
import Headings from '../../components/Headings'
import ProductInfo from './ProductInfo'

function Product() {
    const {id} = useParams()
    const [quantity, setQuantity] = useState(0)
    const filterProduct = flowersData.filter((data)=>{
        return (data.id==id)
    })
    const category = filterProduct[0].category
    const filter_based_on_category = flowersData.filter(function(data){
        return data.category==category
    })
    // console.log(filter_based_on_category)
  return (
    <React.Fragment>
        <div>
            {
                filterProduct.map(function(filtered_data){
                    return (
                        <div key={filtered_data.id+"##11"} className=' gap-6 flex flex-col items-center'>
                            <section className='px-1 space-y-3'>
                                <main className=' flex flex-col items-center sm:flex-row sm:justify-center sm:gap-12 lg:gap-28 sm:py-5  md:py-10'>
                                    <img src={filtered_data.image} alt="Product Image" className=' sm:w-52 md:w-60  py-3 w-44'/>
                                    <div className=" space-y-2">
                                        <div className=" sm:space-y-2 sm:flex sm:flex-col-reverse">
                                            <span className=' py-1 px-2 text-sm sm:w-fit bg-[#00A86B] rounded-sm text-white'>Speedy Delivery Assured</span>
                                            <p className='  font-semibold text-xl'>{filtered_data.title}</p>
                                        </div>
                                        <div>
                                            <p className=' font-semibold text-sm '>Store: <span className=' font-normal'>Bellas</span></p>
                                            <p className=' font-semibold text-sm '>Category: <span className=' font-normal'>{filtered_data.category}</span></p>
                                        </div>
                                        <article className=' text-sm'>
                                            {filtered_data.description}
                                        </article>
                                        <section>
                                            <p className=' font-semibold text-lg py-1'>Extra&apos;s</p>
                                            <ol className=' list-disc px-3'>
                                                <li>Sunlight 25%-30%</li>
                                                <li>Indoor Plant</li>
                                                <li>Very Little Moisture needed</li>
                                                <li>Fake Plant</li>
                                            </ol>
                                        </section>
                                        <section className=' flex justify-between px-2 py-3 '>
                                            <p className=' text-[#00A86B] font-semibold text-lg'>₦{filtered_data.price}</p>
                                            <aside className=' gap-3 flex items-center'>
                                                <span className=' border-[1px] rounded-full border-[#00A86B] px-2 font-semibold'>-</span>
                                                <p className=' font-semibold '>{quantity}</p>
                                                <span className=' bg-[#00A86B] text-white rounded-full px-2 font-semibold'>+</span>
                                            </aside>
                                        </section>
                                        <div className=' sm:flex-row sm:gap-3 gap-4 flex flex-col'>
                                            <button className=' font-semibold  text-lg bg-[#00A86B] text-white w-full max-sm:rounded-md rounded-sm'>Add To Cart</button>
                                            <button className=' font-semibold text-lg bg-[#ffff] text-[#00A86B] border-[1px] max-sm:rounded-md border-[#00A86B]  w-full rounded-m'>Buy Now</button>
                                        </div>
                                    </div>
                                </main>
                                <ProductInfo/>
                                <div className=''>
                                    <Headings heading={"Other Related Products"}/>
                                    <ProductsDisplay data={filter_based_on_category}/>
                                </div>
                            </section>
                        </div>
                    )
                })
            }
        </div>
    </React.Fragment>
  )
}

export default Product