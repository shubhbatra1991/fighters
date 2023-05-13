import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import '../styles/global.css'


export default function Layout({ children }) {
  return (
    <div classname="layout">
        <Navbar />
        <div className='content'>
            { children }
        </div>
        <Footer />
    </div>
  )
}
