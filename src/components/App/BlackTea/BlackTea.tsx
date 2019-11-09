import React from 'react'

import { Layout } from '../../Layout'
import { TeaContents } from '../../Layout/TeaContents'
import { MainVisual } from '../../Layout/MainVisual'

import { blackTeas } from '../../../data/blackTea'

export const BlackTea: React.FC<{}> = () => {
  return (
    <Layout>
      <MainVisual bgColor="#e9967a">Black Tea</MainVisual>
      <TeaContents teas={blackTeas} />
    </Layout>
  )
}
