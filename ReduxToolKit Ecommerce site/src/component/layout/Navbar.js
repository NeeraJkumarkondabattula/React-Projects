import React from "react";
import styled from "styled-components";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "./Footer";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <div>
      <NavBar>
        <div className="left">
          <h1>ReduxToolKit</h1>
          <ul>
            <li>
              <Link to={"/"} className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="link">
                About
              </Link>
            </li>
          </ul>
        </div>
        <Link to={"/cart"} className="link">
          <button className="cart-btn">
            <MdOutlineShoppingBag className="cart-icon" />
            Cart
            <div className="badge">{cart.length}</div>
          </button>
        </Link>
      </NavBar>
      <Outlet />
    </div>
  );
};

const NavBar = styled.div`
  position: fixed;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  height: 60px;
  background-color: #222831;
  color: white;
  padding: 20px;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    h1 {
      font-size: 20px;
    }
  }
  .left ul li {
    display: inline-block;
    margin: 0 10px;
    font-weight: 500;
  }
  .link {
    text-decoration: none;
    color: white;
  }
  .cart-btn {
    font-weight: 600;
    font-size: 14px;
    width: 100px;
    padding: 4px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    outline: none;
    .cart-icon {
      font-size: 25px;
    }
    .badge {
      width: 25px;
      background-color: #222831;
      color: white;
      padding: 0 7px;
      border-radius: 50%;
    }
  }
`;

export default Navbar;
