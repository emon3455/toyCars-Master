import car1 from "../assets/car1.jpg"
import car2 from "../assets/car6.jpg"
import car3 from "../assets/car13.jpg"
import car4 from "../assets/car12.jpg"

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-5 p-2">
            <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left md:w-2/3 text-violet-400">Welcome To ToyCars Master</h2>
                <p className="text-gray-600 font-medium">
                    Discover a world of miniature thrills on our ToyCars Master website. Unleash your imagination with an extensive collection, featuring realistic designs, interactive playsets, and endless racing adventures. Start your engines today!
                </p>
            </div>
            <div className="md:w-1/2 rounded-lg shadow-2xl">
                <div className="carousel w-full h-[450px]">
                    <div id="slide1" className="carousel-item relative w-full rounded-lg">
                        <img src={car1} className="w-full rounded-lg opacity-90" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle btn-error">❮</a>
                            <a href="#slide2" className="btn btn-circle btn-error">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full rounded-lg">
                        <img src={car2} className="w-full rounded-lg opacity-90" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle btn-error">❮</a>
                            <a href="#slide3" className="btn btn-circle btn-error">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full rounded-lg">
                        <img src={car3} className="w-full rounded-lg opacity-90" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle btn-error">❮</a>
                            <a href="#slide4" className="btn btn-circle btn-error">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full rounded-lg">
                        <img src={car4} className="w-full rounded-lg opacity-90" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle btn-error">❮</a>
                            <a href="#slide1" className="btn btn-circle btn-error">❯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;