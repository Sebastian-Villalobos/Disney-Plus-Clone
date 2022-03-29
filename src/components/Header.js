import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Nav>
        <Logo src="./images/logo.svg" />
        <NavMenu>
          <a href="/">
            <img src="./images/home-icon.svg" alt=""/>
            <span>HOME</span>
          </a>
          <a href="/">
            <img src="./images/search-icon.svg" alt=""/>
            <span>SEARCH</span>
          </a>
          <a href="/">
            <img src="./images/watchlist-icon.svg" alt=""/>
            <span>MY LIST</span>
          </a>
          <a href="/">
            <img src="./images/original-icon.svg" alt=""/>
            <span>ORIGINALS</span>
          </a>
          <a href="/">
            <img src="./images/movie-icon.svg" alt=""/>
            <span>MOVIES</span>
          </a>
          <a href="/">
            <img src="./images/series-icon.svg" alt=""/>
            <span>SERIES</span>
          </a>
        </NavMenu>
        <UserImg src="https://image.pngaaa.com/845/4786845-middle.png"/>

    </Nav>
  )
}

export default Header;

const Nav = styled.div`
  height: 70px;
  background:#090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`

const Logo = styled.img`
  width: 75px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    text-decoration: none;
    color: white;


    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &: after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`