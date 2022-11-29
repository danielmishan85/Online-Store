import * as React from "react";
import { Link, useParams } from "react-router-dom";

function ProductCard(props) {
  const id = useParams().id;
  const newItem = props.cards.find((item) => item.id == id);

  let newClassName = `color_bg ${newItem.alt}`;
  let bg_img = `url(${newItem.images})`;
  let { title, newPrice, dollar, color, des, img } = newItem;

  return (
    <div>
      <div className="card">
        <div className="wrapper">
          <div className={newClassName}></div>
          <div className="card_img" style={{ backgroundImage: bg_img }}></div>
          <div className="heart">
            <svg xmlns="<http://www.w3.org/2000/svg>" viewBox="0 0 64 64">
              <path d="M47 5c-6.5 0-12.9 4.2-15 10-2.1-5.8-8.5-10-15-10A15 15 0 0 0 2 20c0 13 11 26 30 39 19-13 30-26 30-39A15 15 0 0 0 47 5z"></path>
            </svg>
          </div>
          <div className="cardInfo">
            <h1>{title}</h1>
            <p className="color_">{color}</p>
            <div className="action">
              <div className="priceGroup">
                <p className="price newPrice">
                  {dollar}
                  {newPrice}
                </p>
              </div>
              <div className="cart">
                <svg
                  className="outCart"
                  xmlns="<http://www.w3.org/2000/svg>"
                  viewBox="0 0 64 64"
                >
                  <path d="M2 6h10l10 40h32l8-24H16"></path>
                  <circle cx="23" cy="54" r="4"></circle>
                  <circle cx="49" cy="54" r="4"></circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="img">
        <img src={img}></img>
      </div>
      <div className="des">{des}</div>
    </div>
  );
}

export default ProductCard;
