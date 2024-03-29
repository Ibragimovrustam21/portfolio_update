import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import resume from '../../resume/my_resume.pdf'
import {
  Bar,
  BlurBackground,
  BtnOutline,
  Hamburger,
  Header,
  LinkBlock,
  LinkWrapper,
  Navbar,
  NavbarLogo,
  NavbarLogoBrand,
  NavbarMenuGroup,
  NavbarMenuItems,
  NavLink
} from './navigation.style.js'
import './navigation.style.js'

const menu = [{
  id: 1,
  pathname: '/',
  menuName: 'Главный',
},
{
  id: 2,
  pathname: '/about',
  menuName: 'Про меня',
},
{
  id: 3,
  pathname: '/portfolio',
  menuName: 'Портфолио',
}]

export const Navigation = () => {
  const location = useLocation()
  const stickyActive = window.scrollY > 0

  const [humbergerActive, setHumbergerActive] = useState(false)
  const [blurBackShowActive, setBlurBackShowActive] = useState(false)
  const [navbarMenuActive, setNavbarMenuActive] = useState(false)


  const navActive = () => {
    if (window.innerWidth < 990) {
      setBlurBackShowActive(!blurBackShowActive)
      setNavbarMenuActive(!navbarMenuActive)
      setHumbergerActive(!humbergerActive)
    }
  }

  return (
    <>
      <BlurBackground blurBackShowActive={blurBackShowActive} />
      <Header >
        <Navbar stickActive={stickyActive}>
          <NavbarLogoBrand>
            <NavbarLogo to='/'>
              Ibragimov Rustam
            </NavbarLogo>
          </NavbarLogoBrand>
          <NavbarMenuGroup navbarMenuActive={navbarMenuActive}>
            <NavbarMenuItems>
              {
                menu.map(item => {
                  return (
                    <LinkBlock key={item.id}>
                      <LinkWrapper>
                        <NavLink
                          isActive={location.pathname === item.pathname}
                          to={item.pathname}
                          onClick={navActive}
                        >
                          <span>0{item.id}.</span>
                          {item.menuName}
                        </NavLink>
                      </LinkWrapper>
                    </LinkBlock>
                  )
                })
              }

            </NavbarMenuItems>
            <BtnOutline as={'a'} href={resume} download={'my_resume.pdf'}>
              Резюме
            </BtnOutline>
          </NavbarMenuGroup>
          <Hamburger humbergerActive={humbergerActive} onClick={navActive}>
            <Bar />
            <Bar />
            <Bar />
          </Hamburger>
        </Navbar>
      </Header>
    </>
  )
}