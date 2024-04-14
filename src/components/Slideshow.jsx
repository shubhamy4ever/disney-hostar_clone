import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg'
import slide4 from '../images/slide4.jpg';

const Slideshow = () => {
    return (
        <>
            <div className="Slideshow">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={slide1} class="d-block w-100 h-450px" alt="..." />
                        </div>
                        <div class="carousel-item ">
                            <img src={slide2} class="d-block w-100 h-450px" alt="..." />
                        </div>
                        <div class="carousel-item ">
                            <img src={slide3} class="d-block w-100 h-450px" alt="..." />
                        </div>
                        <div class="carousel-item ">
                            <img src={slide4} class="d-block w-100 h-450px" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>
    )
}


export default Slideshow;