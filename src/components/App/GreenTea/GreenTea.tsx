import React from 'react'
import styled from 'styled-components'

import { Layout } from '../../Layout'

import okumidori from '../../../images/aokumidori.jpg'
import uchinochaho from '../../../images/uchinochaho.jpg'

export const GreenTea: React.FC<{}> = () => {
  return (
    <Layout>
      <MainVisual>
        <h1>Japanese tea</h1>
      </MainVisual>
      <MainContents>
        <TeaContents>
          <Title>Tea List</Title>
          <List>
            <li>
              <div>
                <img src={okumidori} alt="okumidori" />
              </div>
              <p>東京茶寮 005 OKUMIDORI おくみどり</p>
            </li>
            <li>
              <div>
                <img src={uchinochaho} alt="uchinochaho" />
              </div>
              <p>東京茶寮 005 OKUMIDORI ほうじ茶</p>
            </li>
          </List>
        </TeaContents>
      </MainContents>
    </Layout>
  )
}

const Title = styled.h2`
  @import url('https://fonts.googleapis.com/css?family=Hind&display=swap');
  font-family: 'Hind', sans-serif;
  letter-spacing: 2px;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
`

const TeaContents = styled.div`
  width: 85%;
  margin: 48px auto 0;
`

const MainVisual = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Hind&display=swap');
  font-family: 'Hind', sans-serif;
  width: 50%;
  text-align: center;
  background-color: darkseagreen;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: 5px;
  }
`

const MainContents = styled.section`
  width: 50%;
  height: 100%;
  background-color: #f5efe0;
  overflow-y: scroll;
`

const List = styled.ul`
  @import url('https://fonts.googleapis.com/css?family=Hind&display=swap');
  display: flex;
  flex-wrap: wrap;
  padding-top: 48px;
  li {
    width: 50%;
    padding: 16px;
    box-sizing: border-box;
  }
  img {
    width: 100%;
  }
  p {
    font-weight: bold;
    padding-top: 16px;
    line-height: 1.4;
    font-size: 14px;
    text-align: left;
  }
`
