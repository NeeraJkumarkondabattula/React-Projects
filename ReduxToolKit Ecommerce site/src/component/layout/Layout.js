import React from "react";
import Navbar from "./Navbar";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Product from "../pages/Product";
import Footer from "./Footer";

const Layout = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:id" element={<Product />} />
      </Route>
    )
  );
  return (
    <Provider store={store}>
      <RouterProvider router={router}>
        <Navbar />
      </RouterProvider>
    </Provider>
  );
};

export default Layout;
