import React from "react";
import styled from "styled-components";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { TiStarOutline } from "react-icons/ti";
import { BiDollarCircle } from "react-icons/bi";
import { remove } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleCart = (cart) => {
    dispatch(remove(cart));
  };
  return (
    <Container>
      {carts.length < 1 ? (
        <h1 style={{ textAlign: "center", lineHeight: "80vh" }}>
          <MdOutlineRemoveShoppingCart />
          Cart is empty
        </h1>
      ) : (
        <>
          <h1>Cart</h1>
          <div className="products">
            {carts &&
              carts.map((cart) => {
                return (
                  <div className="item" key={cart.id}>
                    <div
                      className="img"
                      onClick={() => navigate(`/${cart.id}`)}>
                      <img src={cart.thumbnail} alt="" />
                    </div>
                    <div className="context">
                      <h4
                        className="item-title"
                        onClick={() => navigate(`/${cart.id}`)}>
                        {cart.title}
                      </h4>
                      <div className="item-row">
                        <h3 className="item-rating">
                          <TiStarOutline />
                          {cart.rating}
                        </h3>
                        <h5 className="item-price">
                          <BiDollarCircle />
                          {cart.price}
                        </h5>
                      </div>
                      <button
                        className="cart-btn"
                        onClick={() => handleCart(cart)}>
                        <MdOutlineRemoveShoppingCart className="cart-icon" />
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </>
      )}
    </Container>
  );
};
const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 20px 60px;
  padding-top: 60px;
  h1 {
    font-size: 25px;
  }
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    place-items: center;
    column-gap: 40px;
    row-gap: 20px;
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
`;

export default Cart;
