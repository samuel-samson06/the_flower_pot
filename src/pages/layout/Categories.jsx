import React from 'react'

const categories = [
    {
      category:'all'
    },
    {
      category:'plants'
    },
    {
      category:'bouquets'
    },
    {
      category:'gifts'
    },
    {
      category:'roses' 
    },
    {
      category:'ferns'
    }
  ]

function Categories() {

  return (
    <React.Fragment>
        <div>
            <main className=' flex flex-col  sm:flex-row sm:items-center sm:justify-between max-sm:items-start px-5 capitalize'>
                {
                categories.map(function(eachCategory,index){
                    return(
                    <div key={index+"9978#"}>
                        <p className=' cursor-pointer transition-all hover:text-gray-800'>{eachCategory.category}</p>
                    </div>
                    )
                })
                }
            </main>
        </div>
    </React.Fragment>
  )
}

export default Categories
