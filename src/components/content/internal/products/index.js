import React from "react";
import "./style.scss";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

const index = () => {
  let data = [
    {
      prod_id: "1",
      img_src: "https://picsum.photos/300/300",
      prod_title: "lenevo Laptop 320 15isk",
      price: "3592",
      seller: "Chintan Dudhat",
    },
    {
      prod_id: "2",
      img_src: "https://picsum.photos/200/350",
      prod_title: "Samsung mobile 5G",
      price: "4325",
      seller: "Girish Chaudhari",
    },
    {
      prod_id: "3",
      img_src: "https://picsum.photos/200/400",
      prod_title: "realme mobile with qs680",
      price: "309",
      seller: "Pankaj Chaudhari",
    },
    {
      prod_id: "4",
      img_src: "https://picsum.photos/900/0",
      prod_title: "Samsung mobile 5G",
      price: "4325",
      seller: "Girish Chaudhari",
    },
    {
      prod_id: "5",
      img_src: "https://picsum.photos/300/920",
      prod_title: "oppo mobile with 89v vooc charging ",
      price: "3049",
      seller: "Yagnik Chaudhari",
    },
    {
      prod_id: "6",
      img_src: "https://picsum.photos/400/850",
      prod_title: "lenevo Laptop 320 15isk",
      price: "3592",
      seller: "Chintan Dudhat",
    },
    {
      prod_id: "7",
      img_src: "https://picsum.photos/280/620",
      prod_title: "oppo mobile with 89v vooc charging ",
      price: "3049",
      seller: "Yagnik Chaudhari",
    },
    {
      prod_id: "8",
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

export default index;
