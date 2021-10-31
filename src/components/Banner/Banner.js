import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./Banner.css"
const Banner = () => {
    return (
        <div className="mt-1">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/H7cfq6K/Adobe-Stock-262484380-Preview.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="banner-tittle">WelCome To Explore Your Tour </h1>
                        <p>The world is a book and those who do not travel read only one page.Always Be Happy.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/NN4YqKW/Adobe-Stock-464045517-Preview.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="banner-tittle">Choose The Best Tour Package</h1>
                        <p>Throughout our lives, people have thought that because we keep traveling and searching for new things to do.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/VxLnhW9/Adobe-Stock-462987388-Preview.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className="banner-tittle">Travel The Beautiful Place</h1>
                        <p>The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;