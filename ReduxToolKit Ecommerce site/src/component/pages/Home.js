import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { BiDollarCircle } from "react-icons/bi";
import { TiStarOutline } from "react-icons/ti";
import styled from "styled-components";
import { ImSpinner5 } from "react-icons/im";
import { add } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../redux/productSlice";
import Footer from "../layout/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.products);
  const [loading, setLodaing] = useState(false);

  useEffect(() => {
    setLodaing(true);
    dispatch(getProducts());
    setLodaing(false);
  }, []);

  const navigate = useNavigate();

  const smartphones = products.filter((res) => res.category == "smartphones");

  const laptops = products.filter((res) => res.category == "laptops");

  const fragrances = products.filter((res) => res.category == "fragrances");
  const skincare = products.filter((res) => res.category == "skincare");
  const groceries = products.filter((res) => res.category == "groceries");
  const homeDecoration = products.filter(
    (res) => res.category == "home-decoration"
  );

  // useEffect(() => {
  //   setLodaing(true);
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setSmartphones(
  //         res.products.filter((res) => res.category == "smartphones")
  //       );
  //       setLaptops(res.products.filter((res) => res.category == "laptops"));
  //       setFragrances(
  //         res.products.filter((res) => res.category == "fragrances")
  //       );
  //       setSkincare(res.products.filter((res) => res.category == "skincare"));
  //       setGroceries(res.products.filter((res) => res.category == "groceries"));
  //       setHomeDecoration(
  //         res.products.filter((res) => res.category == "home-decoration")
  //       );
  //       setProducts(res.products);
  //       setLodaing(false);
  //     });
  // }, []);

  const handleCart = (product) => {
    dispatch(add(product));
  };

  return (
    <Container>
      {loading ? (
        <ImSpinner5 className="loading" />
      ) : (
        <div className="products">
          {/* {products &&
          products.map((product) => {
            return (
              <div className="item" key={product.id}>
                <div className="img">
                  <img src={product.thumbnail} alt="" />
                </div>
                <div className="context">
                  <h4 className="item-title">{product.title}</h4>
                  <div className="item-row">
                    <h3 className="item-rating">
                      <TiStarOutline />
                      {product.rating}
                    </h3>
                    <h5 className="item-price">
                      <BiDollarCircle />
                      {product.price}
                    </h5>
                  </div>
                  <button className="cart-btn">
                    <MdOutlineAddShoppingCart className="cart-icon" />
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })} */}
          <div>
            <h1>Smartphones</h1>
            <div className="smartphones">
              {smartphones &&
                smartphones.map((product) => (
                  <div className="item" key={product.id}>
                    <div
                      className="img"
                      onClick={() => navigate(`/${product.id}`)}>
                      <img src={product.thumbnail} alt="" />
                    </div>
                    <div className="context">
                      <h4
                        className="item-title"
                        onClick={() => navigate(`/${product.id}`)}>
                        {product.title}
                      </h4>
                      <div className="item-row">
                        <h3 className="item-rating">
                          <TiStarOutline />
                          {product.rating}
                        </h3>
                        <h5 className="item-price">
                          <BiDollarCircle />
                          {product.price}
                        </h5>
                      </div>
                      <button
                        className="cart-btn"
                        onClick={() => handleCart(product)}>
                        <MdOutlineAddShoppingCart className="cart-icon" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <h1>Laptops</h1>
            <div className="smartphones">
              {laptops &&
                laptops.map((product) => (
                  <div className="item" key={product.id}>
                    <div className="img">
                      <img
                        src={product.thumbnail}
                        alt=""
                        onClick={() => navigate(`/${product.id}`)}
                      />
                    </div>
                    <div className="context">
                      <h4
                        className="item-title"
                        onClick={() => navigate(`/${product.id}`)}>
                        {product.title}
                      </h4>
                      <div className="item-row">
                        <h3 className="item-rating">
                          <TiStarOutline />
                          {product.rating}
                        </h3>
                        <h5 className="item-price">
                          <BiDollarCircle />
                          {product.price}
                        </h5>
                      </div>
                      <button
                        className="cart-btn"
                        onClick={() => handleCart(product)}>
                        <MdOutlineAddShoppingCart className="cart-icon" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <h1>Fragrances</h1>
            <div className="smartphones">
              {fragrances &&
                fragrances.map((product) => (
                  <div className="item" key={product.id}>
                    <div
                      className="img"
                      onClick={() => navigate(`/${product.id}`)}>
                      <img src={product.thumbnail} alt="" />
                    </div>
                    <div className="context">
                      <h4
                        className="item-title"
                        onClick={() => navigate(`/${product.id}`)}>
                        {product.title}
                      </h4>
                      <div className="item-row">
                        <h3 className="item-rating">
                          <TiStarOutline />
                          {product.rating}
                        </h3>
                        <h5 className="item-price">
                          <BiDollarCircle />
                          {product.price}
                        </h5>
                      </div>
                      <button
                        className="cart-btn"
                        onClick={() => handleCart(product)}>
                        <MdOutlineAddShoppingCart className="cart-icon" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <h1>Skincare</h1>
            <div className="smartphones">
              {skincare &&
                skincare.map((product) => (
                  <div className="item" key={product.id}>
                    <div
                      className="img"
                      onClick={() => navigate(`/${product.id}`)}>
                      <img src={product.thumbnail} alt="" />
                    </div>
                    <div className="context">
                      <h4
                        className="item-title"
                        onClick={() => navigate(`/${product.id}`)}>
                        {product.title}
                      </h4>
                      <div className="item-row">
                        <h3 className="item-rating">
                          <TiStarOutline />
                          {product.rating}
                        </h3>
                        <h5 className="item-price">
                          <BiDollarCircle />
                          {product.price}
                        </h5>
                      </div>
                      <button
                        className="cart-btn"
                        onClick={() => handleCart(product)}>
                        <MdOutlineAddShoppingCart className="cart-icon" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <h1>Home Decoration</h1>
            <div className="smartphones">
              {homeDecoration &&
                homeDecoration.map((product) => (
                  <div className="item" key={product.id}>
                    <div
                      className="img"
                      onClick={() => navigate(`/${product.id}`)}>
                      <img src={product.thumbnail} alt="" />
                    </div>
                    <div className="context">
                      <h4
                        className="item-title"
                        onClick={() => navigate(`/${product.id}`)}>
                        {product.title}
                      </h4>
                      <div className="item-row">
                        <h3 className="item-rating">
                          <TiStarOutline />
                          {product.rating}
                        </h3>
                        <h5 className="item-price">
                          <BiDollarCircle />
                          {product.price}
                        </h5>
                      </div>
                      <button
                        className="cart-btn"
                        onClick={() => handleCart(product)}>
                        <MdOutlineAddShoppingCart className="cart-icon" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <h1>Groceries</h1>
            <div className="smartphones">
              {groceries &&
                groceries.map((product) => (
                  <div className="item" key={product.id}>
                    <div
                      className="img"
                      onClick={() => navigate(`/${product.id}`)}>
                      <img src={product.thumbnail} alt="" />
                    </div>
                    <div className="context">
                      <h4
                        className="item-title"
                        onClick={() => navigate(`/${product.id}`)}>
                        {product.title}
                      </h4>
                      <div className="item-row">
                        <h3 className="item-rating">
                          <TiStarOutline />
                          {product.rating}
                        </h3>
                        <h5 className="item-price">
                          <BiDollarCircle />
                          {product.price}
                        </h5>
                      </div>
                      <button
                        className="cart-btn"
                        onClick={() => handleCart(product)}>
                        <MdOutlineAddShoppingCart className="cart-icon" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 20px 60px;
  padding-top: 60px;
  .loading {
    position: relative;
    left: 50%;
    top: 300px;
    font-size: 40px;
    animation: loading 600ms infinite ease;
  }
  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  h1 {
    font-size: 25px;
  }
  .products {
    display: flex;
    flex-direction: column;
    gap: 30px;
    /* display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    column-gap: 40px;
    row-gap: 20px; */
    /* border: 1px solid black; */
    .smartphones {
      display: grid;
      grid-template-columns: repeat(50, 1fr);
      overflow-x: scroll;
      scrollbar-width: thin;

      .item {
        width: 300px;
        padding: 15px;
        /* border: 1px solid black; */
        .img img {
          width: 100%;
          aspect-ratio: 8/5;
        }
        .item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .item-title {
          font-size: 18px;
        }
        .item-price {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 18px;
        }
        .item-rating {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 16px;
        }
        .cart-btn {
          font-weight: 600;
          font-size: 14px;
          padding: 4px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          background-color: #222831;
          color: white;
          outline: none;
          .cart-icon {
            font-size: 20px;
          }
        }
      }
    }
    .smartphones ::-webkit-scrollbar {
      width: 10px;
    }
  }
`;

export default Home;
