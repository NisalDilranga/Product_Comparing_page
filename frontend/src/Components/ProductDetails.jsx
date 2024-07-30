import React, { useEffect, useState } from "react";
import Axios from "axios";
import { IoIosAlert } from "react-icons/io";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    Axios.get("http://localhost:3002/api/products")
      .then((response) => {
        setProducts(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="main">
        <div className="sub-main_1">
          <div className="sub-box">
            <div className="sub-box-one">
              <p>Full</p>
            </div>
            <div className="sub-box-two">
              <p>DIFFERENCES</p>
            </div>
          </div>
          <div className="text-1">
            <p><IoIosAlert />Change  Compare  mode</p>
            <div className="circle">
              <p>OR</p>
            </div>
          </div>
        </div>
        <div className="sub-main_2">
          {products.map((product) => (
            <div className="child" key={product._id}>
              <div className="subbox">
                <p>COMPARE WITH</p>
                <input type="text" placeholder="search" />
              </div>
              <div className="subbox2">
                <div className="product-header">
                  <h3>{product.name}</h3>
                </div>

                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-review">
                  <button style={{ color: "white", backgroundColor: "black" }}>
                    REVIEW
                  </button>
                  <button>SPECIFICATIONS</button>
                  <button>READ OPINIONS</button>
                  <button>PICTURES</button>
                </div>
                <div className="product-info">
                  <p>{product.specs}</p>

                  <div className="sub-info">
                    <p>${product.price}</p>

                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/images-312f9.appspot.com/o/amazon-com1%20(1).png?alt=media&token=5dc4a09d-e09c-42d7-988c-5edcf08240d5"
                      alt="amason"
                    />
                  </div>
                </div>
                <div className="product_brand">
                  <img src={product.brand} alt={product.name} />

                  <p>
                    <a href="#">ALL PRICES</a>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
