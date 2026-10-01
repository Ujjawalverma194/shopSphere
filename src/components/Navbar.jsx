import React from 'react'

const Navbar = () => {
  return (
   <>
   <nav className="navbar navbar-expand-lg border-bottom px-4 py-3">
  <div className="container-fluid">
   <div className='nav-left d-flex flex-row gap-3 '>
     <a className="navbar-brand fs-4  fw-bold" href="#">Shop<span className=' nav-span'>Sphere</span></a>
     <input className="nav-input" type="text"  placeholder="Search Brands, products , categories" name="" id="" />
   </div>
    <div className="nav-right d-flex flex-row gap-2 justify-content-center align-items-center">
        <div className="navbtns">
            <button className=' border-none'><i className="fa-regular fa-heart"></i></button>
            <button><i className="fa-solid fa-cart-shopping"></i></button>
        </div>
        
        <div className="nav-profile d-flex flex-row  justify-content-center align-items-center gap-3 ">
            <div className="vertical-line"></div>
            <div className='profile-icon'>EJ</div>
            <p className='pt-2'>Ujjawal</p>
        </div>
    </div>
  </div>
</nav>
   </>
  )
}

export default Navbar
