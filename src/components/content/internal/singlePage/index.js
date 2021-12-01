import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { singleView } from "../../../../redux/actions/products";

const SinglePage = () => {
  const [product, setProduct] = useState();
  const singleData = useSelector((state) => state.singleproduct);
  const dispatch = useDispatch();
  // console.log("singlepage", singleData);

  const { id } = useParams();
  useEffect(() => {
    setProduct(singleData.products);
    dispatch(singleView(id));
  }, [product]);

  // console.log(id);
  return (
    <>
      <Container>
        {singleData.loading === true ? (
          <div>loading...</div>
        ) : (
          <div className="page-content">
            <div className="prod-view-section">
              <div className="img-box">
                <img src={product?.image} alt="" />
              </div>
              <div className="desc-box">
                <div className="title">{product?.title}</div>
                <div className="price">${product?.price}</div>
                <div className="desc">
                  <p>{product?.description}</p>
                </div>
                <div className="qty">
                  <span className="qty-logo">Availabel:</span> 54
                </div>
                <div className="seller">Category : {product?.category}</div>
                <div className="add-to-cart">
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default SinglePage;
