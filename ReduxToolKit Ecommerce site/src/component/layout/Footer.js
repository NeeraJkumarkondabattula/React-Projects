import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <Container>©copyrights by NeerajKumar</Container>;
};

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 60px;
  background-color: #222831;
  color: white;
  line-height: 20px;
  padding: 20px 60px;
  position: relative;
  bottom: 0px;
`;

export default Footer;
