import { useState } from 'react'
import './App.css'
import Routes from './Routes'
import Footer from './components/common/Footer'
import Header from './components/common/Header'

function App() {
 

  return (
    <>
    <Header />
    <Routes />
      {/* <p className="read-the-docs">
        Minto Joseph
      </p> */}

      <Footer />
    </>
  )
}

export default App
