import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "../features/footer/footer";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
