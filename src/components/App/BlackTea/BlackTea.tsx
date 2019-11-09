import React from 'react'
import styled from 'styled-components'

import { Layout } from '../../Layout'

import fortnumandmason from '../../../images/fortnumandmason.jpg'
import mariagefreres from '../../../images/mariagefreres.jpg'
import buntingtee from '../../../images/buntingtee.jpg'
import suki from '../../../images/suki.jpg'
import navarasa from '../../../images/navarasa.jpg'

export const BlackTea: React.FC<{}> = () => {
  return (
    <Layout>
      <MainVisual>
        <h1>Black Tea</h1>
      </MainVisual>
      <MainContents>
        <TeaContents>
          <Title>Tea List</Title>
          <List>
            <li>
              <div>
                <img src={fortnumandmason} alt="okumidori" />
              </div>
              <p>Fortnum & Mason / ROYAL BLEND</p>
            </li>
            <li>
              <div>
                <img src={mariagefreres} alt="mariagefreres" />
              </div>
              <p>MARIAGE FRÈRES / EARL GREY IMPERIAL</p>
            </li>
            <li>
              <div>
                <img src={buntingtee} alt="buntingtee" />
              </div>
              <p>Bünting Tee / C.K. Privat </p>
            </li>
            <li>
              <div>
                <img src={suki} alt="suki" />
              </div>
              <p>SUKI TEA / EARLGREY BLUEFLOWER</p>
            </li>
            <li>
              <div>
                <img src={navarasa} alt="navarasa" />
              </div>
              <p>Navarasa / fruits rouges</p>
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
  @import 'https://fonts.googleapis.com/css?family=Hind&display=swap';
  font-family: 'Hind', sans-serif;
  width: 50%;
  text-align: center;
  background-color: darksalmon;
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
  font-family: 'Hind', sans-serif;
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
