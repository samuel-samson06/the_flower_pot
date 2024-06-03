import React from 'react'
import { flowersData } from '../../fakeData'
import Headings from '../../components/Headings'
import ProductsDisplay from '../../components/ProductsDisplay'

function Newly_Arrived() {
  return (
    <React.Fragment>
        <div className=' space-y-3 py-5 px-2'>
            <Headings heading={"Newly Arrived Products"}/>
            <section>
                <ProductsDisplay data={flowersData} sliceStart={8} sliceEnd={13}/>
            </section>
        </div>
        <br />
    </React.Fragment>
  )
}

export default Newly_Arrived