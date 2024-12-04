import Navbar from "../components/Navbar";
import Hero from "../components/ProductHero";
import Second from "../components/ProductSecond";
import Touch from '../components/Touch'
import Footer from "../components/Footer";

const Product = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="relative bg-[#F8FBFF]">
        <Hero />
        <Second />
        <Touch />
        <Footer />
      </main>
    </div>
  );
};

export default Product;
