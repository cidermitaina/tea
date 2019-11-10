import React from 'react'
import styled from 'styled-components'

interface Props {
  isShow: boolean
  onClickHamburger: () => void
}

export const Hamburger: React.FC<Props> = ({ isShow, onClickHamburger }) => {
  return (
    <MenuIcon className={isShow ? 'burger burger-squeeze open' : 'burger burger-squeeze'} onClick={onClickHamburger}>
      <Lines className="burger-lines"></Lines>
    </MenuIcon>
  )
}

const MenuIcon = styled.div`
  height: 3em;
  width: 3em;
  position: relative;
  font-size: 12px;
  cursor: pointer;
  transition: 0.2s all;
  transform: scale(0.8, 0.8);
  margin: 0 auto;

  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 150%;
    width: 150%;
    top: -25%;
    left: -25%;
  }

  &.open {
    .burger-lines {
      &,
      &:after,
      &:before {
        transition: .2s background-color, .2s top, .2s left, .2s transform .15s;
      }
      & {
        background-color: transparent;
      }
      &:before,
      &:after {
        left: 0.5em;
        top: 0px;
      }
      &:before {
        transform: rotate(-45deg);
      }
      &:after {
        transform: rotate(45deg);
      }
    }
  }
}
`

const Lines = styled.div`
  top: 50%;
  margin-top: -0.125em;
  background-color: #333;

  &,
  ::before,
  ::after {
    pointer-events: none;
    display: block;
    content: '';
    width: 100%;
    border-radius: 0.25em;
    height: 0.25em;
    position: absolute;
    transform: rotate(0);
    background-color: #333;
    transition: 0.2s top 0.2s, 0.1s left, 0.2s transform, 0.4s background-color 0.2s;
  }

  &::after,
  &::before {
    width: 2em;
  }

  &::after {
    left: 0;
    top: -1em;
  }

  &::before {
    left: 1em;
    top: 1em;
  }
`
