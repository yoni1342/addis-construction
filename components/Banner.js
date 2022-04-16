import React from 'react'
export default function Banner() {
  return (
    <div className = 'relative dark:bg-gray-800'>
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
        <div className = 'w-[40rem] absolute xl:top-[70%] xl:left-[60%] bg-gradient-to-br from-green-800 to-green-300 p-2 hidden lg:inline-block lg:top-[40%] lg:left-[34%]'>
            <video src="./vid.mp4" autoPlay controls muted></video>
            
        </div>
    </div>
  )
}
