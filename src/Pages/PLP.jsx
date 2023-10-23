import React from "react";
import product from "../JSON/product.json";
import { Rating } from "@mui/material";
import "./plp.css";

export default function plp() {
  return (
    <>
      <div className="container">
        <div className="main-div">
          {product.map((items) => {
            return (
              <>
                <div className="items">
                  <div className="content">
                    <div className="closeout">{items.closeout}</div>
                    <div className="photo">
                      <img
                        src={items.image}
                        alt=""
                        width={"100%"}
                        height={"237.19px"}
                      />
                    </div>
                    <div className="title">{items.title}</div>
                    <div className="price">$ {items.price}</div>
                    <div className="discout-price">
                      {" "}
                      <s>$ {items.price + 100} </s>
                    </div>
                    <div className="discount-banner">SALE 50% OFF!</div>
                    <div className="rating">
                      <div className="rate">
                        <Rating
                          name="read-only"
                          value={items.rating.rate}
                          readOnly
                        />
                      </div>
                      <div className="count">
                        <p className="rating-count">({items.rating.count})</p>
                      </div>
                    </div>
                    <div className="more">
                      <div>{items.color}</div>
                      <div>
                        <a href="https://www.youtube.com/">
                          <img
                            src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-64.png"
                            alt=""
                            width={"25px"}
                          />
                        </a>
                      </div>
                    </div>
                  </div>

                    <a className="btn btn-success" href="/">
                      BUY NOW
                    </a>
                  
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
