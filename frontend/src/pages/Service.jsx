import Navbar from '../components/Navbar';
import Hero from '../components/ServiceHome'
import SecondPage from '../components/ServiceSecond'

import Footer from '../components/Footer'

const Service = () => {
  return (
    <div className="min-h-screen ">
    <Navbar />
    <main className="relative bg-[#F8FBFF]" >
        <Hero />
        <SecondPage />
        
        <Footer />
    </main>
  </div>
  )
} 

export default Service;