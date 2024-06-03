import React from 'react'
import { flowersData } from '../../fakeData'
import ProductsDisplay from '../../components/ProductsDisplay'
import BestSeller from './BestSeller'
function Products() {
  return (
    <React.Fragment>
        <div>
            <section>
                <BestSeller/>
            </section>
            <div className=' flex flex-col px-5'>
                <p className="font-semibold text-base sm:text-lg pt-5 pb-2">Products</p>
                <ProductsDisplay data={flowersData}/>
                <br />
            </div>
            <section>
                <BestSeller/>
            </section>
            <br />
        </div>
    </React.Fragment>
  )
}

export default Products