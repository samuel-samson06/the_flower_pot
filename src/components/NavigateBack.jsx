import React from 'react'
import {useNavigate} from "react-router-dom" 

function NavigateBack() {
    const navigate = useNavigate()
  return (
    <React.Fragment>
        <div className=' cursor-pointer font-semibold text-xl' onClick={()=>{navigate("/")}}>
            ←
        </div>
    </React.Fragment>
  )
}

export default NavigateBack