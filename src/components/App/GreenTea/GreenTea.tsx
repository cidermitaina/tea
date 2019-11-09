import React from 'react'

import { Layout } from '../../Layout'
import { MainVisual } from '../../Layout/MainVisual'
import { TeaContents } from '../../Layout/TeaContents'

import { greenTeas } from '../../../data/greenTea'

export const GreenTea: React.FC<{}> = () => {
  return (
    <Layout>
      <MainVisual bgColor="#8fbc8f">Japanese Tea</MainVisual>
      <TeaContents teas={greenTeas} lang="ja" />
    </Layout>
  )
}
