import React, {} from 'react'
import {Context} from "./context/Context"
import FlowerPot from './FlowerPot'

function App() {
  const value = {}

  return (
    <React.Fragment>
      <Context.Provider value={value}>
        <FlowerPot/>
      </Context.Provider>
    </React.Fragment>
  )
}

export default App