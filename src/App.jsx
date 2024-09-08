import { useState } from "react";
import Main from "./components/Main";
import SideBar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const API_KEY = import.meta.env.VITE_NASA_API_KEY

  const [showModal, setShowModal] = useState(false);

  const handleModalToggle = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <Main />
      {showModal && (<SideBar handleModalToggle={handleModalToggle}/>)}
      <Footer handleModalToggle={handleModalToggle}/>
    </>
  );
}

export default App;
