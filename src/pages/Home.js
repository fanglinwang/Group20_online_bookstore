import React from "react";
// import "./styles.css";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { formatPrice } from "../utils/helpers";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
// import { Product } from "../components";
const Book = ({ coverImage, title, author, price, category, id }) => (
  <div className="book">
    <div className="subcontainer">
      <img className="book-cover" src={coverImage} alt="Book cover" />
      <Link to={`/textbooks/${id}`} className="link">
        <FaSearch />
      </Link>
    </div>
    <div className="book-details">
      <h3 className="book-title">{title}</h3>
      <p className="book-author">{author}</p>
      <p className="book-price">{formatPrice(price)}</p>
      {/* <p className="book-category">{category}</p> */}
    </div>
  </div>
);

const Home = () => {
  const { products } = useProductsContext();
  return (
    <Wrapper>
      <div className="container">
        <div className="header">
          <h1>Welcome to UWbook!</h1>
          <p>Discover your favorite books and enjoy the pleasure of reading!</p>
          {/* <button className="shop-now-button">
            Shop Now<link to="/"></link>
          </button> */}
          <Link to="/textbooks" className="shop-now-button">
            Shop Now
          </Link>
        </div>

        <div className="section">
          <h2>Newest Books</h2>
          <div className="book-list">
            <Book
              coverImage="https://m.media-amazon.com/images/I/81Ep5K9OapL.jpg"
              name="Homecoming: A Novel"
              author="Kate Morton"
              price="1889"
              category="Fiction"
            />
            <Book
              coverImage="https://m.media-amazon.com/images/I/A1QzdulfJ1L.jpg"
              title="Mad Honey: A novel"
              author="Jodi Picoult"
              price="2330"
            />
            <Book
              coverImage="https://m.media-amazon.com/images/I/91WXMz9H2BL.jpg"
              title="Dreamland: A Novel"
              author="Nicholas Sparks"
              price="2500"
            />
          </div>
        </div>

        <div className="section">
          <h2>Recommended Books</h2>
          <div className="book-list">
            <Book
              coverImage="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51D7jQMbzNL.jpg"
              title="Core Java: Fundamentals Volume 1"
              author="Cay Hostmann"
              id="sjjj22jjswkl"
              price="6000"
            />
            <Book
              coverImage="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81e1VFn-BzL.jpg"
              title="Software Engineering At Google"
              author="Titus Winters"
              id="llkkq2nns"
              price="7844"
            />
            <Book
              coverImage="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/71nfIKllaTL.jpg"
              title="C++ Programming Language"
              author="Bjarne Stroustrup"
              id="kjlkkjh779"
              price="10944"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 10px;
  }
  .subcontainer {
    position: relative;
    // background: var(--clr-black);
    border-radius: var(--radius);
    margin: 2rem, auto;
  }
  .link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--clr-primary-5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .subcontainer:hover img {
    opacity: 0.5;
  }
  .subcontainer:hover .link {
    opacity: 1;
  }
  .header {
    text-align: center;
    margin: 20px 0;
    background-image: url("https://images.unsplash.com/photo-1599741602853-6da3d021f767?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjAwfHxib29rc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60");
    background-position: center;
    height: 400px;
    // line-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .shop-now-button {
    background-color: #000000; /* 背景颜色 */
    color: #fff; /* 文字颜色 */
    border: none; /* 去掉边框 */
    padding: 10px 20px; /* 内边距 */
    font-size: 16px; /* 字体大小 */
    border-radius: 5px; /* 圆角 */
    cursor: pointer; /* 鼠标悬停样式 */
    transition: all 0.3s ease; /* 过渡动画 */
    margin: 15px;
    text-decoration: none;
  }

  .shop-now-button:hover {
    background-color: #f5f5f5; /* 鼠标悬停时的背景颜色 */
  }

  .header h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  .header p {
    font-size: 1.2rem;
  }

  .section {
    margin-bottom: 80px;
  }

  .section h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  .book-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    // grid-template-columns: repeat(4, 200px);
    grid-gap: 20px;
  }

  .book {
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 20px 80px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  .book:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }

  .book-cover {
    width: 100%;
    height: auto;
  }

  .book-title {
    font-size: 1.2rem;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  .book-author {
    font-size: 1rem;
    color: #666;
    margin-bottom: 5px;
  }
  .book-price {
    font-weight: bold;
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  .footer {
    text-align: center;
    margin-top: 80px;
    padding: 20px 0;
    background-color: #f5f5f5;
  }
`;

export default Home;
