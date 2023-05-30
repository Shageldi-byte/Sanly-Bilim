import Counter from "../../components/home/Counter";
import Header from "../../components/home/Header";
import PatternLogo from "../../assets/icon/element/PatternLogo";

const Home = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "-350px",
          position: "absolute",
          width: "100%",
          zIndex: -1,
        }}
      >
        <PatternLogo />
      </div>
      <Counter />
    </div>
  );
};

export default Home;
