import Footer from "@/layout/Footer";
import Hero from "@/layout/Hero";
import HeroSection2 from "@/layout/Hero2";

export default function Home() {
  return (
    <>
      <main className="sticky top-0 w-full  bg-black text-white ">
        <Hero />
        <HeroSection2 />
        <Footer />
      </main>
    </>
  );
}
