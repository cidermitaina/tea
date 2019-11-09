import React from 'react'
import styled from 'styled-components'

import { Hamburger } from './Hamburger'

interface Link {
  name: string
  url: string
}

interface Props {
  links: Link[]
}

export interface State {}

export class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {}
  }
  public render() {
    const { links } = this.props
    return (
      <Wrapper>
        <nav>
          <Hamburger />
          <NavList>
            {links.map(link => (
              <li>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </NavList>
        </nav>
      </Wrapper>
    )
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
  top: 24px;
  transform: translateX(-50%);
  z-index: 1;
  text-align: center;
`

const NavList = styled.ul`
  display: none;

  & > li {
    padding: 0 8px;
    margin-top: 16px;
  }
  & a {
    color: #333;
  }
`
