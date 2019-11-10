import React from 'react'
import styled from 'styled-components'

import { Heading } from '../../shared/Heading'
import { space, mediaQuery } from '../../../themes/size'

import { FaRegGrinAlt, FaGithubAlt, FaTwitter, FaInstagram, FaBookOpen, FaHeart } from 'react-icons/fa'

export const ContactContents: React.FC<{}> = () => {
  const snsLinks = [
    { name: FaRegGrinAlt, url: 'https://cidermitaina.github.io/' },
    { name: FaGithubAlt, url: 'https://github.com/cidermitaina' },
    { name: FaTwitter, url: 'https://twitter.com/cidermitaina' },
    { name: FaInstagram, url: 'https://www.instagram.com/stsiiii/' },
    { name: FaBookOpen, url: 'http://cidermitaina.hatenablog.com/' },
    { name: FaHeart, url: '' },
  ]

  const onClickHeart = () => {
    var style = ['font-size: 2em;', 'color: white;', 'padding: 2px;', 'background: #ffa07a']
    console.log("%cThank you ! \nLet's have a relaxing time over tea　ʕ•̫͡•ʔ", style.join(''))
  }
  return (
    <Wrapper>
      <Contents>
        <Heading tag="h2" className="subBlockTitle">
          cidermitaina
        </Heading>
        <List>
          {snsLinks.map((snsLink, index) => (
            <li key={index}>
              {snsLink.url ? (
                <Link href={snsLink.url}>
                  <snsLink.name />
                </Link>
              ) : (
                <Button type="button" onClick={onClickHeart}>
                  <snsLink.name />
                </Button>
              )}
            </li>
          ))}
        </List>
      </Contents>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: #f5efe0;

  @media screen and (max-width: ${mediaQuery.sp}px) {
    width: 100%;
  }
`

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-direction: column;
`

const List = styled.ul`
  padding-top: ${space.s};
  display: flex;

  > li {
    padding: ${space.xxs};
  }
`

const Link = styled.a`
  transition: 0.3s all;

  @media screen and (min-width: ${mediaQuery.sp}px) {
    &:hover {
      opacity: 0.7;
    }
  }

  > svg {
    color: #777;
    width: 32px;
    height: 32px;
  }
`
const Button = styled.button`
  transition: 0.3s all;
  border: none;
  cursor: pointer;
  background: none;
  padding: 0;

  @media screen and (min-width: ${mediaQuery.sp}px) {
    &:hover {
      opacity: 0.7;
    }
  }

  &:focus {
    outline: 0;
  }

  > svg {
    color: #777;
    width: 32px;
    height: 32px;
  }
`
