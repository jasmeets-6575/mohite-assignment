import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  const navigation = useNavigation();

  const isPageLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar />
      <section className="mx-auto my-0 py-5 px-2 w-[90vw] ">
        {isPageLoading ? <div>Loading...</div> : <Outlet />}
      </section>
      <Footer />
    </div>
  );
};
export default HomeLayout;
