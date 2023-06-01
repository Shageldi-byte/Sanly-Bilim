import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router-dom";
import Spacer from "../components/common/Spacer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Spacer space={1} />
      <Footer />
    </div>
  );
};

export default MainLayout;
