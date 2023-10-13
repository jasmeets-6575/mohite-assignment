import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar />
      <section>{isPageLoading ? <div>Loading...</div> : <Outlet />}</section>
      <Footer />
    </div>
  );
};
export default HomeLayout;
