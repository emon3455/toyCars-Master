import ActiveLink from "./ActiveLink";
import Lottie from "lottie-react";
import about from "../../public/about.json";

const About = () => {
    return (
        <div className="my-10  p-4 bg-gray-50">

            <h4 className="text-4xl font-extrabold text-violet-500 text-center">About US</h4>

            <div className="grid grid-cols-1  md:grid-cols-2 justify-center items-center mt-0 gap-5" >
                <div className="order-2 md:order-1" data-aos="zoom-in-down" data-aos-easing="linear" data-aos-duration="1500">

                    <h2 className="text-4xl font-bold my-7">ToyCars Master</h2>
                    <p className="font-medium text-gray-700 mb-5 text-justify">
                    At our toy cars website, we are passionate about bringing joy and excitement to kids and collectors alike. With a wide selection of high-quality toy cars, we strive to fuel imaginations and create unforgettable play experiences. Our dedication to customer satisfaction and attention to detail sets us apart. Join us on this thrilling journey!
                    </p>
                    <ActiveLink to="/allToys">
                        <button className="btn btn-warning font-bold">View All Toys</button>
                    </ActiveLink>

                </div>
                <div className="w-full h-96 order-1" data-aos="flip-up" data-aos-easing="linear" data-aos-duration="500">
                    <Lottie className="w-full h-full" animationData={about} loop={true} />;
                </div>
            </div>
        </div>
    );
};

export default About;