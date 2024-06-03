import React from 'react'
import Newly_Arrived from './Newly_Arrived'
import Slides from './Slides'
import Promotion from './Promotion'
import Testimonials from './Testimonials'
import Tips from './Tips'
import TopSellers from './TopSellers'

function Home() {
  return (
    <React.Fragment>
        <div className=" overflow-hidden">
          <section>
            <Slides/>
          </section>
          <section>
            <Newly_Arrived/>
          </section>
          <section>
            <Promotion/>
          </section>
          <section>
            <Testimonials/>
          </section>
          <section>
            <Tips/>
          </section>
          <section>
            <TopSellers/>
          </section>
        </div>
    </React.Fragment>
  )
}

export default Home