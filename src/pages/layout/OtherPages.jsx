import React from 'react'
import NavigateBack from '../../components/NavigateBack'
import { Outlet, useLocation } from 'react-router-dom'

function OtherPages() {
    const current_path_location = useLocation()
    const path = current_path_location.pathname.split("/")[1]
  return (
    <React.Fragment>
        <div>
            <header>
                <NavigateBack/>
                <p>{path}</p>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    </React.Fragment>
  )
}

export default OtherPages