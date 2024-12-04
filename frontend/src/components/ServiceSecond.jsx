import Card from "./ServiceCard";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";
import photo4 from "../assets/photo4.png";

const CardsContainer = () => {
  return (
    <div className="bg-[#F8FBFF] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
        {/* Card 1 */}
        <Card
          title="Social Media Management"
          description="Build a strong social media presence with tailored strategies, engaging content, and audience interaction to boost visibility, foster connections, and drive business results through effective social media management."
          buttonText="Request a Quote"
          imageSrc={photo1}
          isSecondCard={false}
          isFourthCard={false}
        />

        {/* Card 2 */}
        <Card
          title="Search Engine Optimization"
          description="Boost your online visibility and organic rankings with tailored SEO strategies, including audits, keyword research, and optimizations to drive sustainable growth, improve user experience, and increase organic traffic."
          buttonText="Request a Quote"
          imageSrc={photo2}
          isSecondCard={true}
          isFourthCard={false}
        />

        {/* Card 3 */}
        <Card
          title="Content Marketing"
          description="Engage your audience with tailored content strategies, high-quality assets, and distribution across channels to inspire and drive engagement."
          buttonText="Request a Quote"
          imageSrc={photo3}
          isSecondCard={false}
          isFourthCard={false}
        />

        {/* Card 4 */}
        <Card
          title="Paid Advertising"
          description="Boost growth with targeted ad campaigns on Google, social media, and more, focusing on audience targeting and ROI optimization."
          buttonText="Request a Quote"
          imageSrc={photo4}
          isSecondCard={false}
          isFourthCard={true}
        />
      </div>
    </div>
  );
};

export default CardsContainer;
