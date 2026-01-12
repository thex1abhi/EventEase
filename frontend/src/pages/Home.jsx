
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import About from "./About";
import Events from "../Components/Eventdemo";
import Reviews from "../Components/Reviews";

const Home = () => {
  return (
    <>
      <Navbar />
      <Events />
      <Reviews />
      <About />
      <Footer />
    </>
  );
};
export default Home;

