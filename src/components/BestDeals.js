import React from "react";
import Product from "./Product";
import { useProductsContext } from "../context/products_context";
import styled from "styled-components";
import { FaDollarSign } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const BestDeals = () => {
  const { products: products } = useProductsContext();
  return (
    <Wrapper>
      <h2>Featured Books</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {products.map((product) => {
          return (
            <SwiperSlide>
              <Product key={product.id} {...product}></Product>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 25px 50px;
  .swiper {
    width: 100%;
    height: 400px;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default BestDeals;
