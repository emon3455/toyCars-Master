import car1 from "../assets/car5.jpg"
import car2 from "../assets/car2.jpg"
import car3 from "../assets/car3.jpg"
import car4 from "../assets/car8.jpg"
import ActiveLink from "./ActiveLink";

const About = () => {
    return (
        <div className="my-10  p-4 bg-gray-50">

            <h4 className="text-4xl font-extrabold text-violet-500 text-center mb-10">About US</h4>

            <div className="grid grid-cols-1  md:grid-cols-2 justify-center items-center gap-5">
                <div className="order-2 md:order-1">

                    <h2 className="text-4xl font-bold my-7">ToyCars Master</h2>
                    <p className="font-medium text-gray-700">
                    At our toy cars website, we are passionate about bringing joy and excitement to kids and collectors alike. With a wide selection of high-quality toy cars, we strive to fuel imaginations and create unforgettable play experiences. Our dedication to customer satisfaction and attention to detail sets us apart. Join us on this thrilling journey!
                    </p>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 order-1 md:order-2">
                    <img className="card   image-full" src={car1} />
                    <img className="card   image-full" src={car2} />
                    <img className="card   image-full" src={car3} />
                    <img className="card   image-full" src={car4} />
                </div>
            </div>

            <div className="text-center my-8">
                <ActiveLink to="/allToys">
                    <button className="btn btn-warning font-bold">View All Toys</button>
                </ActiveLink>
            </div>

        </div>
    );
};

export default About;