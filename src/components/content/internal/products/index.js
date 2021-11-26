import { Container } from "@mui/material";
import React from "react";
import "./style.scss";

const index = () => {
  let data = [
    {
      img_src: "https://picsum.photos/300/300",
      prod_title: "lenevo Laptop 320 15isk",
      price: "3592",
      seller: "Chintan Dudhat",
    },
    {
      img_src: "https://picsum.photos/200/350",
      prod_title: "Samsung mobile 5G",
      price: "4325",
      seller: "Girish Chaudhari",
    },
    {
      img_src: "https://picsum.photos/200/400",
      prod_title: "realme mobile with qs680",
      price: "309",
      seller: "Pankaj Chaudhari",
    },
    {
      img_src: "https://picsum.photos/900/0",
      prod_title: "Samsung mobile 5G",
      price: "4325",
      seller: "Girish Chaudhari",
    },
    {
      img_src: "https://picsum.photos/300/920",
      prod_title: "oppo mobile with 89v vooc charging ",
      price: "3049",
      seller: "Yagnik Chaudhari",
    },
    {
      img_src: "https://picsum.photos/400/850",
      prod_title: "lenevo Laptop 320 15isk",
      price: "3592",
      seller: "Chintan Dudhat",
    },
    {
      img_src: "https://picsum.photos/280/620",
      prod_title: "oppo mobile with 89v vooc charging ",
      price: "3049",
      seller: "Yagnik Chaudhari",
    },
    {
      img_src: "https://picsum.photos/300/450",
      prod_title: "realme mobile with qs680",
      price: "309",
      seller: "Pankaj Chaudhari",
    },
  ];
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
                <button className="cart-btn"> Add To Cart </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default index;
