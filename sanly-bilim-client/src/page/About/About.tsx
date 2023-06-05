import Header from "../../components/About/Header";
import SecondSection from "../../components/About/SecondSection";
import ThirdSection from "../../components/About/ThirdSection";
import Spacer from "../../components/common/Spacer";

const About = () => {
  return (
    <div>
      <Header />

      <SecondSection />

      <Spacer space={4} />
      <ThirdSection />
    </div>
  );
};

export default About;
