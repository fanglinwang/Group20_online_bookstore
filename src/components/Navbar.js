import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import CartButtons from "./CartAuthButtons";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { useProductsContext } from "../context/products_context";
import { BiSearch } from "react-icons/bi";
const Navbar = () => {
  const { openSidebar } = useProductsContext();
  return (
    <NavContainer>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="uwbook" />
            </Link>

            <button type="button" className="nav-toggle" onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className="nav-links">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
          </ul>
          {/* <div className="search-btn">
            <input type="search" />
            <button>
              <BiSearch />
            </button>
          </div> */}
          <div className="cartButton">
            <CartButtons />
          </div>
        </div>
      </nav>
    </NavContainer>
  );
};
const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  a:-webkit-any-link {
    text-decoration: none;
    cursor: pointer;
  }
  .cartButton {
    text-align: right;
  }
  .nav-center {
    width: 90vw;
    margin: auto;
    max-width: var(--max-width);
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .cart-btn-wrapper {
    display: none;
  }

  .search-btn {
    display: none;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: 1fr 4fr 1fr;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      list-style-type: none;
      margin-top: 10px;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-grey-3);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
    .cart-btn-wrapper {
      display: grid;
    }
    .search-btn {
      display: flex;
      margin: auto;

      input {
        // border: 1px;
        width: 10rem;
        align-items: center;
      }
      button {
        background: transparent;
        border: transparent;
      }
    }
  }
`;
export default Navbar;
