import Navbar from "../components/Navbar";
import HomeSecond from '../components/Carousel'
import Footer from '../components/Footer'
import Hero from '../components/AboutHome'
import Touch from '../components/Touch'


const AboutUs = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="relative bg-[#F8FBFF]" >
      <Hero />
        <HomeSecond />
        <Touch />
        <Footer />
      </main>
    </div>
  );
};

export default AboutUs