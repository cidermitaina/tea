import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Hamburger } from './Hamburger'
import { space, font, mediaQuery } from '../../../themes/size'

interface menus {
  name: string
  url: string
}

interface Props {
  menus: menus[]
}

export interface State {
  isShow: boolean
}

export const Header: React.FC<Props> = ({ menus }) => {
  const [isShow, setIsShow] = useState(false)
  const onClickHamburger = () => setIsShow(!isShow)

  return (
    <Wrapper>
      <nav>
        <Hamburger isShow={isShow} onClickHamburger={onClickHamburger} />
        <NavList className={isShow ? 'open' : ''}>
          {menus.map(menu => (
            <li key={menu.name}>
              <Link to={menu.url}>{menu.name}</Link>
            </li>
          ))}
        </NavList>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  @import url('https://fonts.googleapis.com/css?family=Hind&display=swap');

  font-family: 'Hind', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  margin-left: auto;
  position: absolute;
  left: 50%;
  top: ${space.m};
  transform: translateX(-50%);
  z-index: 1;
  text-align: center;

  @media screen and (max-width: ${mediaQuery.sp}px) {
    position: fixed;
    width: 100%;
    top: 0;
  }
`

const NavList = styled.ul`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s;

  @media screen and (max-width: ${mediaQuery.sp}px) {
    background-color: #fff;
  }

  &.open {
    /* TODO: JSで高さ取得、アニメーションの調節 */
    max-height: 500px;
    transition: max-height 0.7s;
  }

  & > li {
    padding: 0 8px;
    margin: ${space.m} 0;
  }
  & a {
    color: #333;
    font-size: ${font.s};
    position: relative;
    display: inline-block;

    &::after {
      position: absolute;
      bottom: -6px;
      left: 0;
      content: '';
      width: 100%;
      height: 2px;
      background: #333;
      transform: scale(0, 1);
      transform-origin: left top;
      transition: transform 0.3s;
    }

    @media screen and (min-width: ${mediaQuery.sp}px) {
      &:hover::after {
        transform: scale(1, 1);
      }
    }
  }
`
