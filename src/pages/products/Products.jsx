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
            <div>
                <p className=" px-3 font-semibold pt-3 pb-1">Products</p>
                <ProductsDisplay data={flowersData}/>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Products