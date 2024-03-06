import Brands from "./Brands";
import CustomerReviews from "./CustomerReviews";
import Details from "./Details";
import Features from "./Features";
import Footer from "./Footer";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Network from "./Network";
import Plan from "./Plan";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Landing />
      <div className="md:mt-0 mt-10 flex justify-center items-center h-[24vw] md:h-[8vw] border-b-[#F3F3F3] border-b-2 border-r-[#F3F3F3] border-r-2 md:w-[80%] w-[220%] mx-2 md:mx-40 rounded-2xl">
        <div className="md:h-[5vw] flex justify-between mx-20 md:mx-40 gap-40">
          <Details imgSrc="https://mrrufrus.github.io/LaslesVPN-layout/assets/02.svg" figures="90+" name="Users"/>
          <Details imgSrc="https://mrrufrus.github.io/LaslesVPN-layout/assets/03.svg" figures="30+" name="Locations"/>
          <Details imgSrc="https://mrrufrus.github.io/LaslesVPN-layout/assets/04.svg" figures="50+" name="Servers"/>
        </div>
      </div>
      <Features />
      <Plan />
      <Network />
      <Brands />
      <CustomerReviews />
      <Footer />
    </div>
  );
}
