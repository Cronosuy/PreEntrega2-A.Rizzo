import "./App.css";
import Button from "./assets/components/Button/Button";
import axios from "axios";
import Navbar from "./assets/components/Navbar/Navbar";
import { useEffect, useState } from "react";
import ServiceList from "./assets/components/ServiceList";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./assets/components/Home";
import ServiceItem from "./assets/components/ServiceItem";

const App = () => {
  const handleClick = () => {
    alert("Click me!");
  };

  const [servicios, setServicios] = useState([]);

  const getServicios = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setServicios(res.data);
  };
  useEffect(() => {
    getServicios();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>CRONOS BARBER</h1>
      <Routes>
        <Route path="/" element={<Navigate to="home" />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="servicios"
          element={<ServiceList servicios={servicios} />}
        />
        <Route
          path="/servicios/:id"
          element={<ServiceItem servicios={servicios} />}
        />
      </Routes>
    </div>
  );
};

export default App;
