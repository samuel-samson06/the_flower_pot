import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function HomePageLayout() {
  return (
    <React.Fragment>
        <div className=' flex flex-col min-h-screen'>
            <header>
                <Header/>
                <br /><br /><br />
            </header>
            <main className=' flex-grow'>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    </React.Fragment>
  )
}

export default HomePageLayout