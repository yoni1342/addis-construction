import React from 'react'
import { Carousel }from 'react-responsive-carousel'
export default function Banner() {
  return (
    <div>
        <div id="carouselExampleControls" className="relative carousel slide clip-your-needful-style" data-bs-ride="carousel">
            <div  className ='absolute top-0 bg-gradient-to-br from-[#4ecca23f] to-[#2ec895dc] w-screen h-screen z-10 flex justify-start items-center '>
            <img src="./logo.png" alt="" className = 'cursor-pointer w-96 ml-40' />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="./bg1.jpeg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="./bg1.jpeg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="./bg1.jpeg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  )
}
