import React from 'react'
import "./caraoser.css"
const Caraosel = () => {
  return (
    <>

<div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner">
 
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900*400?burger" className="d-block img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900*400?momos" className="d-block img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900*400?pizza" className="d-block img" alt="..."/>
    </div>
    <div className="carausel-caption" style={{zIndex:"10",position:"relative",top:"37rem"}} >
  <form className="d-flex">
      <input className="form-control me-2 bg-dark text-white active" type="search" placeholder="Search" aria-label="Search"/>
    </form>
  </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Caraosel