import { Route, Routes } from "react-router-dom";
import "./style/styles.scss";
import Layout from "./components/layout";
import Home from "./features/home/home";
import Contact from "./components/contact";
import About from "./components/about";
import Intro from "./features/intro/intro";
import Socials from "./features/socials/socials";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/socials" element={<Socials />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
