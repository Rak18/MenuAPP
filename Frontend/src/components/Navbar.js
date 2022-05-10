import React from 'react'
import './../layout/Home.css'

function Navbar() {
  return (
    <>
    <header>

    <a href="#" className="logo"><i className="fas fa-utensils"></i>Tasty Delights.</a>
    
    <nav className="navbar">
        <a className="active" href="#home">home</a>
        <a href="#dishes">dishes</a>
       
    </nav>
    
    <div className="icons">
        <i className="fas fa-bars" id="menu-bars"></i>
        <i className="fas fa-search" id="search-icon"></i>
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-shopping-cart"></a>
    </div>
    
    </header>
    </>
  )
}

export default Navbar;