import React from 'react'

import { Layout } from '../../Layout'
import { ContactContents } from './ContactContents'
import { MainVisual } from '../../Layout/MainVisual'

export const Contact: React.FC<{}> = () => {
  return (
    <Layout>
      <MainVisual bgColor="#d2b48c">Contact</MainVisual>
      <ContactContents />
    </Layout>
  )
}
