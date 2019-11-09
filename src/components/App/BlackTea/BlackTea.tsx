import React from 'react'
import styled from 'styled-components'

import { Layout } from '../../Layout'
import { Heading } from '../../shared/Heading'
import { space } from '../../../themes/size'

import fortnumandmason from '../../../images/fortnumandmason.jpg'
import mariagefreres from '../../../images/mariagefreres.jpg'
import buntingtee from '../../../images/buntingtee.jpg'
import suki from '../../../images/suki.jpg'
import navarasa from '../../../images/navarasa.jpg'

export const BlackTea: React.FC<{}> = () => {
  return (
    <Layout>
      <MainVisual>
        <Heading className="sectionTitle">Black Tea</Heading>
      </MainVisual>
      <MainContents>
        <TeaContents>
          <Heading tag="h2" className="blockTitle">
            Tea List
          </Heading>
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

const TeaContents = styled.div`
  width: 85%;
  margin: ${space.xl} auto 0;
`

const MainVisual = styled.div`
  width: 50%;
  text-align: center;
  background-color: darksalmon;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding-top: ${space.xl};
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
