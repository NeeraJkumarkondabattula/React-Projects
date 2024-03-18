import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Product = () => {
  const { id } = useParams();
  const { data: products } = useSelector((state) => state.products);
  const product = products.filter((product) => product.id == id);

  return (
    <Container>
      <h1>Product</h1>
      {product && (
        <>
          <div className="product">
            <div className="images">
              <img src={product[0].thumbnail} alt="" />
            </div>
            <div className="details">
              <h1 className="title">{product[0].title}</h1>
              <h2 className="price">
                Price:
                {product[0].price}
              </h2>
              <h3 className="rating">
                Rating:
                {product[0].rating}
              </h3>
              <h3 className="brand">Brand: {product[0].brand}</h3>
              <h3 className="category">Category: {product[0].category}</h3>
              <h3 className="stock">Stock: {product[0].stock}</h3>
            </div>
          </div>
          <h3 className="description">Description: {product[0].description}</h3>
          <h3 className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
            justo nec ultrices dui sapien. Augue lacus viverra vitae congue.
            Molestie nunc non blandit massa enim. Lectus magna fringilla urna
            porttitor rhoncus dolor. Faucibus a pellentesque sit amet. Ut lectus
            arcu bibendum at varius vel pharetra vel turpis. Egestas tellus
            rutrum tellus pellentesque eu tincidunt tortor. Molestie a iaculis
            at erat pellentesque. Nisi quis eleifend quam adipiscing vitae
            proin. Gravida rutrum quisque non tellus orci ac auctor. Tellus
            rutrum tellus pellentesque eu tincidunt tortor aliquam. Tincidunt
            dui ut ornare lectus sit amet.
          </h3>
          <h3 className="lorem">
            Semper quis lectus nulla at volutpat. Fringilla est ullamcorper eget
            nulla facilisi etiam dignissim. Quisque sagittis purus sit amet
            volutpat consequat. Amet cursus sit amet dictum sit. Nullam eget
            felis eget nunc lobortis. Turpis nunc eget lorem dolor. Eu sem
            integer vitae justo. Enim lobortis scelerisque fermentum dui
            faucibus. Eget mauris pharetra et ultrices neque ornare aenean
            euismod elementum. Ut lectus arcu bibendum at varius. Mauris vitae
            ultricies leo integer malesuada nunc. Lacus viverra vitae congue eu
            consequat ac felis donec. Eu sem integer vitae justo eget. Venenatis
            a condimentum vitae sapien pellentesque habitant morbi tristique.
          </h3>
          <div className="imageGallery">
            {product[0].images.map((img) => (
              <div key={img.id}>
                <img src={img} alt="" />
                <h3 className="lorem" style={{ margin: "0px" }}>
                  Semper quis lectus nulla at volutpat. Fringilla est
                  ullamcorper eget nulla facilisi etiam dignissim. Quisque
                  sagittis purus sit amet volutpat consequat. Amet cursus sit
                  amet dictum sit. Nullam eget felis eget nunc lobortis. Turpis
                  nunc eget lorem dolor. Eu sem integer vitae justo. Enim
                  lobortis scelerisque fermentum dui faucibus. Eget mauris
                  pharetra et ultrices neque ornare aenean euismod elementum. Ut
                  lectus arcu bibendum at varius. Mauris vitae ultricies leo
                  integer malesuada nunc. Lacus viverra vitae congue eu
                  consequat ac felis donec. Eu sem integer vitae justo eget.
                  Venenatis a condimentum vitae sapien pellentesque habitant
                  morbi tristique.
                </h3>
              </div>
            ))}
          </div>
          <h3 className="lorem">
            Turpis egestas maecenas pharetra convallis posuere. Amet volutpat
            consequat mauris nunc congue nisi vitae suscipit tellus. Elit at
            imperdiet dui accumsan sit amet nulla facilisi morbi. Arcu vitae
            elementum curabitur vitae nunc sed velit. Est velit egestas dui id.
            Dignissim diam quis enim lobortis scelerisque fermentum dui. Mauris
            ultrices eros in cursus turpis massa tincidunt dui ut. Pretium fusce
            id velit ut tortor pretium viverra suspendisse. Habitant morbi
            tristique senectus et netus et. Etiam dignissim diam quis enim
            lobortis scelerisque fermentum dui. Convallis posuere morbi leo urna
            molestie. Dignissim enim sit amet venenatis urna cursus eget nunc.
            Eu volutpat odio facilisis mauris sit amet massa. Purus in massa
            tempor nec feugiat nisl pretium. Condimentum mattis pellentesque id
            nibh tortor id aliquet lectus. Arcu cursus vitae congue mauris
            rhoncus aenean. Bibendum ut tristique et egestas quis.
          </h3>
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
  .product {
    display: flex;
    align-items: center;
    gap: 30px;
    .images {
      width: 40%;
      padding: 25px;
      img {
        width: 100%;
      }
    }
    .details {
      .title {
        font-size: 30px;
        font-weight: 500;
      }
      .price {
        font-size: 32px;
        font-weight: 500;
      }
      .rating {
        font-size: 30px;
        font-weight: 500;
      }
      .brand {
        font-size: 25px;
        font-weight: 500;
      }
      .category {
        font-size: 25px;
        font-weight: 500;
      }
      .stock {
        font-size: 25px;
        font-weight: 500;
      }
    }
  }
  .description {
    font-weight: 500;
    font-size: 24px;
  }
  .lorem {
    font-weight: 500;
    font-size: 23px;
    margin: 10px;
  }
  .imageGallery {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    row-gap: 25px;
    padding: 30px;
    img {
      width: 100%;
    }
  }
`;
export default Product;
