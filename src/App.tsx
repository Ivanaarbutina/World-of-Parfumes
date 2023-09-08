import { Route, Routes } from "react-router-dom";
import "./style/styles.scss";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </>
  );
}

export default App;
