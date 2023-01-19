import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const Sticky = css`
  transition: all 0.3s linear;
  height: 70px;
  z-index: 10;
  backdrop-filter: blur(10px);
  pointer-events: auto;
  box-shadow: 0 10px 30px - 10px rgba(2, 12, 27, 0.7);
`
const blurBackShow = css`
  transform: translateX(0%);
  transition: all 0.7s ease;
  filter: blur(10px);
`
const navActive = css`
  transform: translateX(0%);
  transition: all 0.7s ease;
`

export const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10 !important;
`

export const Navbar = styled.div`
  position: fixed;
  height: 80px;
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 30px;
  transition: all 0.5s linear;
  ${(stickActive) => stickActive && Sticky}

`

export const NavbarLogoBrand = styled.div`
  width: auto;
  height: 100%;
`

export const NavbarLogo = styled(Link)`
  height: 100%;
  cursor: pointer;

  img {
    width: auto;
    height: 90%;
  } 
`

export const NavbarMenuGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: auto;

  @media  (max-width: 990px){
    position: absolute;
    background-color: #112240;
    height: 100vh;
    min-width: 30% !important;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateX(100%);
    transition: all 0.7s ease;
    z-index: 10;
    filter: none!important;
    ${({ navbarMenuActive }) => navbarMenuActive && navActive}
  }

`
export const LinkBlock = styled.div``

export const NavbarMenuItems = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 990px){
    flex-direction: column;
    height: 60%;
    width: 100%;
    box-sizing: border-box;
    padding: 5px;
    overflow-y: auto;
    overflow-x: hidden;

    ${LinkBlock}{
      padding: 20px 0;
      width: 100%;
      border-bottom: 1px solid #ccc;
    }
    
  }
`

export const LinkWrapper = styled.div`
  margin: 0 20px;
  cursor: pointer;
`

export const NavLink = styled(Link)`
  font-size: 16px;
  color:${({ isActive }) => isActive ? '#64ffda' : '#ccd6f6'};
  letter-spacing: 1px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  &:hover {
    color: #64ffda;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  span {
    color: #64ffda;
    font-weight: normal;
  }
`

export const Bar = styled.div`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #8892b0;

  @media  (max-width: 990px){
    background-color: #64ffda;
  }
`
export const Hamburger = styled.div`
  display: none;

  ${({ humbergerActive }) => humbergerActive && css`
    ${Bar}:nth-child(1){
      transform: translateY(8px) rotate(45deg);
    }
    ${Bar}:nth-child(2){
      opacity: 0;
    }
    ${Bar}:nth-child(3){
      transform: translateY(-8px) rotate(-45deg);
    }
  ` }
  

  @media  (max-width: 990px){
    display: block!important;
    z-index: 10;
  }
`

export const BlurBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #0b1629;
  opacity: 0.7;
  transform: translateX(-100%);
  transition: all 0.7s ease;
  filter: blur(3px);
  backdrop-filter: blur(10px);
  z-index: 3;
  ${({ blurBackShowActive }) => blurBackShowActive && blurBackShow}
`
export const BtnOutline = styled.a`
  color: #64ffda;
  background-color: transparent;
  border: 1px solid #64ffda;
  border-radius: 4px;
  padding: 8px 15px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  text-decoration: none;
  cursor: pointer;
  font-size: 16px;
  text-align: center;

  &:hover {
    background-color: #64ffda;
    color: #0a192f;
    border: 1px solid transparent;
  }
`

