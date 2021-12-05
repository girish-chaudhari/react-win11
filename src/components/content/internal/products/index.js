import React, { useEffect } from "react";
import "./style.scss";
import { Container, Skeleton } from "@mui/material";
import { Link } from "react-router-dom";
// import { data } from "../../../../data";
import { useDispatch, useSelector } from "react-redux";
import { productsView, singleView } from "../../../../redux/actions/products";

const GetAllProducts = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.products);
  console.log("this is selector data", data.products);

  const skeletonLoop = [1, 2, 3, 4, 5, 6, 7, 8];
  const multProducts = data.products;
  console.log("this is prooducts page here ->", multProducts);

  useEffect(() => {
    dispatch(productsView());
  }, []);

  return (
    <>
      <Container>
        {data.products.length === 0 ? (
          <div className="cards-box">
            {skeletonLoop.map((item, i) => (
              <div className="card" style={{ height: "250px" }} key={i}>
                <div className="card-img-skeleton">
                  <Skeleton
                    variant="rectangular"
                    height={120}
                    width="100%"
                  ></Skeleton>
                </div>
                <div className="desc-box">
                  <div className="title">
                    <Skeleton width="100%"></Skeleton>
                  </div>
                  <div className="price-section">
                    <Skeleton width="100%"></Skeleton>
                  </div>
                  <div className="seller-title">
                    <Skeleton width="50%"></Skeleton>
                  </div>
                  <div className="seller-title" style={{ marginTop: 10 }}>
                    <Skeleton
                      variant="rectangular"
                      height={20}
                      width="100%"
                    ></Skeleton>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="cards-box">
            {multProducts &&
              multProducts?.map((item, i) => (
                <div className="card" key={i}>
                  <div className="card-img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="desc-box">
                    <div className="title">{item.title}</div>
                    <div className="price-section">$ {item.price}</div>
                    <div className="seller">
                      <span className="seller-title">Seller:</span> Girish
                      Chaudhari
                    </div>
                    <Link to={`singlepage/${item.id}`}>
                      <button className="cart-btn">Add To Cart</button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        )}
      </Container>
    </>
  );
};

export default GetAllProducts;
