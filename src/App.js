import Card from "./components/Card";
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./components/ProductCard";
import ProductCard from "./components/ProductCard";
import CardList from "./components/CardList";

function App() {
  var cards = [
    {
      id: 0,
      title: "Iphone 14",
      images:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcScjF_48xRbEzGePE5ArXLnB1cIdgz_K4rOU0lQAQsKzeivHqtegz_kCOzl3c0atOUEE-UKyk7XadKp&usqp=CAc",
      color: "Black",
      newPrice: "1000",
      dollar: "$",
      product: "iphone14",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDmiftRaazwmQbA7pxVPewzdkHZU6OZ3bPrgE9YBBGmu9GM9b5cWg9UTi8Vmpb-semCvY&usqp=CAU",
      des: "Iphone 14 , 164 GB , black",
    },

    {
      id: 1,
      title: "Iphone 14 ProMax",
      images:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRojpOKQwdVQDDAttCJ6HRTcLVzw_a19KDg8E5ZGd90pMtP1LXfyMBMjbnGz025nA&usqp=CAc",
      color: "Grey",
      newPrice: "1500",
      dollar: "$",
      product: "iphone14",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDmiftRaazwmQbA7pxVPewzdkHZU6OZ3bPrgE9YBBGmu9GM9b5cWg9UTi8Vmpb-semCvY&usqp=CAU",
      des: "Iphone 14 Pro Max , 164 GB , Grey",
    },

    {
      id: 2,
      title: "Iphone 14",
      images:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT-Ua7aMI1OJod6BWFGJYH9m_twAnKkvnp0-53VAjICCSEOnRQo2br9FUBirzBD_xizRDeyRZSvZn3n&usqp=CAc",
      color: "Red",
      newPrice: "1000",
      dollar: "$",
      product: "iphone14",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDmiftRaazwmQbA7pxVPewzdkHZU6OZ3bPrgE9YBBGmu9GM9b5cWg9UTi8Vmpb-semCvY&usqp=CAU",
      des: "Iphone 14 , 164 GB ,  Red",
    },

    {
      id: 3,
      title: "Iphone 14",
      images:
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ-aX7BSq8DGLKlQB25wcA-_5jeGL-hPzOd-xGeKpQNdc-ocHgG_51mTrtn4mbd4haU1bujPzqnZ4I&usqp=CAc",
      color: "Blue",
      newPrice: "1000",
      dollar: "$",
      product: "iphone14",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDmiftRaazwmQbA7pxVPewzdkHZU6OZ3bPrgE9YBBGmu9GM9b5cWg9UTi8Vmpb-semCvY&usqp=CAU",
      des: "Iphone 14  , 164 GB , Blue",
    },
  ];

  return (
    <>
      <div className="div1">Online Phone Store</div>

      <Router>
        <Routes>
          <Route path="/" element={<CardList cards={cards} />} />
          <Route path="/:id" element={<ProductCard cards={cards} />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
