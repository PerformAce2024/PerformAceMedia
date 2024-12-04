// pages/HomePage.jsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeSecond from '../components/HomeSecond'
import HomeThird from '../components/HomeThird'
import Quote from '../components/Quote'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="relative bg-[#F8FBFF]" >
        <Hero />
        <HomeSecond />
        <HomeThird />
        <Quote />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;