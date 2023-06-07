import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const RootLayout = () => (
  <>
    <Header />
    <Outlet />
    <Contact />
    <Footer />
  </>
);

export default RootLayout;
