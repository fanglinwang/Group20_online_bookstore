import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { single_product_url as url } from "../utils/constants";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSkull } from "react-icons/fa";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import { formatPrice } from "../utils/helpers";

const SingleProductPage = () => {
  const { id } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();
  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
  }, [id]);
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    conditions,
    images,
    image,
    company,
    author,
  } = product;
  // image = images[0];
  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center page">
        <Link to="/textbooks" className="btn">
          back to books
        </Link>
        <div className="product-center">
          {/* <ProductImages images={images} /> */}
          <img src={image} alt="main image" className="main" />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className="price">{formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Author : </span>
              {author}
            </p>
            <p className="info">
              <span>Available : </span>
              {stock > 0 ? "in stock" : "out of stock"}
            </p>
            {/* <p className="info">
              <span>Description : </span>
              {description}
            </p> */}

            <hr />

            {stock > 0 && <AddToCart product={product} />}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
  .main {
    height: 600px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
`;

export default SingleProductPage;
