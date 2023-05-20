import About from "../Components/About";
import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Gallery from "../Components/Gallery";
import ShopByCategory from "../Components/ShopByCategory";
import { useTitle } from "../hooks/useTitle";

const Home = () => {

    useTitle("Home");

    return (
        <div className="my-2">
            <Banner></Banner>
            <About></About>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Contact></Contact>
        </div>
    );
};

export default Home;