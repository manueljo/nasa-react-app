import { useEffect, useState } from "react";
import Main from "./components/Main";
import SideBar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(null);

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    const fetchApiData = async () => {
      const API_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`

      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setData(apiData);
        console.log('from cache');
        return
      }
      localStorage.clear();

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log('from api')
      } catch (error) {
        console.error(error);
      }
    };

    fetchApiData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data}/>
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <SideBar handleModalToggle={handleModalToggle} data={data} />
      )}
      {data && <Footer handleModalToggle={handleModalToggle} data={data} />}
    </>
  );
}

export default App;
