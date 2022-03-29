import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";

const StyledNav = styled.nav`
  .right-links {
    padding-left: 20px;
    padding-right: 20px;
    li {
      list-style-type: none;
      padding-top: 20px;
      padding-bottom: 20px;
      text-decoration: none;
      display: grid;
      text-align: center;
    }
  }

  @media only screen and (min-width: 672px) {
    width: 100%;
    background-color: #eeeeee;
    display: flex;
    justify-content: space-between;

    .nav-button {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    .menu {
      display: flex;
    }

    .right-links {
      display: flex;
    }
  }
`;

const StyledLink = styled(NavLink)`
  &.nav-item {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    text-decoration: none;
    background-color: #eeeeee;
    color: black;
  }

  @media only screen and (min-width: 672px) {
    &.nav-item {
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
    }

    &.active {
      color: #0ea68c;
    }
    &.visited {
      color: black;
    }
  }
`;

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 1rem;

  .logo {
    font-size: 3rem;
    margin: 2rem 0rem;
  }
`;

const Header = () => {
  return (
    <>
      <header>
        <StyledNav className="page-padding">
          <div className="menu">
            <img src="./img/menu_black_24dp.svg" alt="menu" />
          </div>
          <ul className="right-links">
            <li>
              <StyledLink to="/" className="nav-item">
                Products
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/dashboard" className="nav-item">
                Dashboard
              </StyledLink>
            </li>
            <li className="nav-button">
              <LoginButton />
            </li>
          </ul>
        </StyledNav>
      </header>
      <StyledHeader className="main-layout section-padding">
        <h1 className="logo">Cat Couture</h1>
      </StyledHeader>
    </>
  );
};

export default Header;
