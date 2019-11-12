import React from 'react'
import styled from 'styled-components'

import { mediaQuery } from '../../../themes/size'

interface Props {
  isShow: boolean
  onClickHamburger: () => void
}

export const Hamburger: React.FC<Props> = ({ isShow, onClickHamburger }) => {
  return (
    <MenuIcon className={isShow ? 'open' : ''} onClick={onClickHamburger}>
      <Lines />
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

  @media screen and (max-width: ${mediaQuery.sp}px) {
    position: fixed;
    right: 2rem;
    top: 2rem;
  }

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
    & > div {
      background-color: transparent;
      &,
      &::after,
      &::before {
        transition: 0.2s background-color, 0.2s top, 0.2s left, 0.2s transform 0.15s;
      }
      &::before,
      &::after {
        left: 0.5em;
        top: 0;
      }
      &::before {
        transform: rotate(-45deg);
      }
      &::after {
        transform: rotate(45deg);
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
