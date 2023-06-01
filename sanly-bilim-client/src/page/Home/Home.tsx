import Counter from "../../components/home/Counter";
import Header from "../../components/home/Header";
import PatternLogo from "../../assets/icon/element/PatternLogo";
import SecondSection from "../../components/home/SecondSection";
import About from "../../components/home/About";
import Cards from "../../components/home/Cards";
import Services from "../../components/home/Services";
import Spacer from "../../components/common/Spacer";

const Home = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-400px",
          position: "absolute",
          width: "100%",
          zIndex: -1,
        }}
      >
        <PatternLogo />
      </div>
      <Counter />

      <SecondSection />

      <About />

      <Cards />

      <Services />

      <Spacer space={4} />
      <About />
      <Spacer space={4} />
    </div>
  );
};

export default Home;
