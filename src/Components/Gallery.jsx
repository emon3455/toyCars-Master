/* eslint-disable no-unused-vars */
import car1 from "../assets/car1.jpg"
import car2 from "../assets/car2.jpg"
import car3 from "../assets/car3.jpg"
import car4 from "../assets/car4.jpg"
import car5 from "../assets/car5.jpg"
import car6 from "../assets/car6.jpg"
import car7 from "../assets/car7.jpg"
import car8 from "../assets/car8.jpg"
import car9 from "../assets/car9.jpg"
import car10 from "../assets/car10.jpg"
import car11 from "../assets/car11.jpg"
import car12 from "../assets/car12.jpg"
import Marquee from "react-fast-marquee";

const Gallery = () => {
    return (
        <div className="my-10">

            <h2 className="text-4xl text-center font-bold mb-10">Our Toys Gallery</h2>

            <Marquee >

                <div className="grid grid-cols-12 md:grid-cols-6 gap-4">
                    <img className="card w-80 h-44 image-full" src={car1} />
                    <img className="card w-80 h-44  image-full" src={car2} />
                    <img className="card w-80 h-44  image-full" src={car3} />
                    <img className="card w-80 h-44  image-full" src={car4} />
                    <img className="card w-80 h-44  image-full" src={car5} />
                    <img className="card w-80 h-44  image-full mr-5" src={car6} />
                    <img className="card w-80 h-44 image-full" src={car7} />
                    <img className="card w-80 h-44  image-full" src={car8} />
                    <img className="card w-80 h-44  image-full" src={car9} />
                    <img className="card w-80 h-44  image-full" src={car10} />
                    <img className="card w-80 h-44  image-full" src={car11} />
                    <img className="card w-80 h-44  image-full mr-5" src={car12} />
                </div>

            </Marquee>

        </div>
    );
};

export default Gallery;