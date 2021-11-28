import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";
import { Container } from "@mui/material";

const SinglePage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <Container>
        <div className="page-content">
          <div className="prod-view-section">
            <div className="img-box">
              <img src="https://picsum.photos/900/850" alt="" />
            </div>
            <div className="desc-box">
              <div className="title">Samsung Electronics Mobile 5G</div>
              <div className="price">$ 5000.39</div>
              <div className="desc">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur facilis doloremque dolorem aperiam rem suscipit hic
                  sunt porro consectetur eveniet. Vero, est facere. Cum
                  cupiditate est rem placeat quo tempore?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur facilis doloremque dolorem aperiam rem suscipit hic
                  sunt porro consectetur eveniet. Vero, est facere. Cum
                  cupiditate est rem placeat quo tempore?
                </p>
              </div>
              <div className="qty">
                <span className="qty-logo">Availabel:</span> 54
              </div>
              <div className="seller">Seller : Girish Chaudhari</div>
              <div className="add-to-cart">
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SinglePage;
