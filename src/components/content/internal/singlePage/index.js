import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import { CircularProgress, Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { singleView } from "../../../../redux/actions/products";

const SinglePage = () => {
  const product = useSelector((state) => state.singleproduct.products);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(singleView(id));
  }, [dispatch, id]);

  // console.log(id);
  return (
    <>
      <Container>
        {product.length === 0 && product ? (
          <div className="progress-bar-loading">
            <CircularProgress />
          </div>
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
