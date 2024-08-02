import React, { useEffect, useState } from "react";
import Axios from "axios";
import { IoIosAlert } from "react-icons/io";
import ReactPlayer from "react-player/youtube";

const ProductDetails = () => {
  const [products, setProducts] = useState([]);
  const [productsTwo, setProductsTwo] = useState([]);
  const [name, setName] = useState("Vivo y16");
  const [nameTwo, setNameTwo] = useState("Xiaomi 14");
  const [search, setSearch] = useState("");
  const [searchTwo, setSearchTwo] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [searchDataTwo, setSearchDataTwo] = useState([]);
  const [productData, setProductData] = useState([]);
  const [productDataTwo, setProductDataTwo] = useState([]);

  const handleChangeOne = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleChangeTwo = (e) => {
    e.preventDefault();
    setSearchTwo(e.target.value);
  };

  useEffect(() => {
    if (search !== "") {
      const newSearchData = productData.filter((data) =>
        data.name.toLowerCase().includes(search.toLowerCase())
      );

      setSearchData(newSearchData);
    } else {
      setSearchData([]);
    }
  }, [search]);
  useEffect(() => {
    if (searchTwo !== "") {
      const newSearchDataTwo = productDataTwo.filter((data) =>
        data.name.toLowerCase().includes(searchTwo.toLowerCase())
      );

      setSearchDataTwo(newSearchDataTwo);
    } else {
      setSearchDataTwo([]);
    }
  }, [searchTwo]);

  useEffect(() => {
    fetchProducts();
  }, [name, nameTwo]);

  const fetchProducts = async () => {
    try {
      const response = await Axios.get(`http://localhost:3002/api/products`);
      const allProducts = response.data.response;
      setProductData(allProducts);
      setProductDataTwo(allProducts);

      const filtered = allProducts.filter((product) => product.name === name);
      const filteredTwo = allProducts.filter(
        (product) => product.name === nameTwo
      );

      setProducts(filtered);
      setProductsTwo(filteredTwo);
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
          <p>
            <IoIosAlert />
            Change Compare mode
          </p>
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
              <input
                type="text"
                placeholder="search"
                onChange={handleChangeOne}
                value={search}
              />
              <div className="search-res">
                {searchData.map((data, index) => (
                  <a
                    key={index}
                    onClick={() => {
                      setName(data.name);
                      setSearch(data.name);
                      setSearchData([]);
                    }}
                  >
                    {data.name}
                  </a>
                ))}
              </div>
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
                    alt="amazon"
                  />
                </div>
              </div>
              <div className="product_brand">
                <ReactPlayer
                  url={product.reference}
                  width="150px"
                  height="80px"
                  className="react-player"
                  light
                />
                <p>
                  <a href="#">ALL PRICES</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="sub-main_2">
        {productsTwo.map((product) => (
          <div className="child" key={product._id}>
            <div className="subbox">
              <p>COMPARE WITH</p>
              <input
                type="text"
                placeholder="search"
                onChange={handleChangeTwo}
                value={searchTwo}
              />
              <div className="search-res">
                {searchDataTwo.map((data, index) => (
                  <a
                    key={index}
                    onClick={() => {
                      setNameTwo(data.name);
                      setSearchTwo(data.name);
                      setSearchDataTwo([]);
                    }}
                  >
                    {data.name}
                  </a>
                ))}
              </div>
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
                    alt="amazon"
                  />
                </div>
              </div>
              <div className="product_brand">
                <ReactPlayer
                  url={product.reference}
                  width="150px"
                  height="80px"
                  className="react-player"
                  light
                />
                <p>
                  <a href="#">ALL PRICES</a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
