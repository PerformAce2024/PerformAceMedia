import Navbar from "../components/Navbar";
import Hero from "../components/ContactHero"
import Quote from "../components/Quote"
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="min-h-screen ">
      <Navbar />
      <main className="relative">
        <Hero />
        <Quote />
        <Footer />
      </main>
    </div>
  );
};

export default ContactUs;
