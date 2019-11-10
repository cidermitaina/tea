import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Hamburger } from './Hamburger'
import { space, font } from '../../../themes/size'

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

export class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      isShow: false,
    }
  }
  public render() {
    const { isShow } = this.state
    const { menus } = this.props

    return (
      <Wrapper>
        <nav>
          <Hamburger isShow={isShow} onClickHamburger={this.onClickHamburger} />
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

  private onClickHamburger = () => {
    this.setState({ isShow: !this.state.isShow })
  }
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
`

const NavList = styled.ul`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.5s;
  padding-bottom: ${space.s};

  &.open {
    /* TODO: JSで高さ取得、アニメーションの調節 */
    max-height: 500px;
    transition: max-height 0.7s;
  }

  & > li {
    padding: 0 8px;
    margin-top: ${space.s};
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

    &:hover::after {
      transform: scale(1, 1);
    }
  }
`
