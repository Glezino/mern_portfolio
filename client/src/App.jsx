import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Index";
import { hideLoading, setPortfolioData, showLoading } from "./redux/rootSlice";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./components/Loader";
import Admin from "./pages/Admin/AdminIndex";
import Login from "./pages/Admin/AdminLogin";

function App() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const getPortfolioData = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get("/api/portfolio/get-portfolio-data");
      dispatch(setPortfolioData(response.data));
      console.log(portfolioData);
      console.log(response.data);
      dispatch(hideLoading());
    } catch (error) {
      console.error("Error al obtener los datos:", error);
      dispatch(hideLoading());
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  return (
    <>
      <BrowserRouter>
        {loading ? <Loader /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
