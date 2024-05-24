import React, { useState } from 'react'
import { flowersData } from '../../fakeData'
import { useParams } from 'react-router-dom'
import ProductsDisplay from '../../components/ProductsDisplay'
import Headings from '../../components/Headings'


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
                            <img src={filtered_data.image} alt="Product Image" className=' py-3 w-44'/>
                            <section className=' px-3 space-y-3'>
                                <span className=' py-1 px-2 text-sm bg-[#00A86B] rounded-sm text-white'>Speedy Delivery Assured</span>
                                <p className=' font-semibold text-xl'>{filtered_data.title}</p>
                                <article className=' text-sm'>
                                    {filtered_data.description}
                                </article>
                                <section>
                                    <p className=' font-semibold text-lg py-1'>Extra&apos;s</p>
                                    <ol className=' list-item list-disc px-3'>
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
                                        <p className=' font-semibold \'>{quantity}</p>
                                        <span className=' bg-[#00A86B] text-white rounded-full px-2 font-semibold'>+</span>
                                    </aside>
                                </section>
                                <div className=' flex flex-col'>
                                    <button className=' font-semibold text-lg bg-[#00A86B] text-white w-full rounded-md'>Add To Cart</button>
                                </div>
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