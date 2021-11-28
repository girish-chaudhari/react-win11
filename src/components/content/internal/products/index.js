import React, { useState, useEffect } from "react";
import "./style.scss";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { data } from "../../../../data";
import { useDispatch } from "react-redux";
import { productsView } from "../../../../redux/actions/products";

const GetAllProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("hello");
    dispatch(productsView());
  }, []);

  return (
    <>
      <Container>
        <div className="cards-box">
          {data.map((item, i) => (
            <div className="card" key={i}>
              <div className="card-img">
                <img src={item.img_src} alt="" />
              </div>
              <div className="desc-box">
                <div className="title">{item.prod_title}</div>
                <div className="price-section">$ {item.price}</div>
                <div className="seller">
                  <span className="seller-title">Seller:</span> {item.seller}
                </div>
                <Link to={`singlepage/${item.prod_id}`}>
                  <button className="cart-btn">Add To Cart</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default GetAllProducts;
