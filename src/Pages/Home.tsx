import Announcements from "../components/Announcements";
import NavBar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Product from "../components/Product";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Announcements />
      <NavBar />
      <Slider />
      <Categories />
      <Product />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
