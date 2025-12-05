import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* "pt-20" adds padding top so content isn't hidden behind fixed navbar */}
      <main className="flex-grow pt-20">
        <Outlet />
        {/* This is where the Page Content (Home/About/Login) will load */}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
