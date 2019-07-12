import React from 'react'

import Layout from './layout'
import GalleryPageContent from './gallery-page-content'

const GalleryPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <GalleryPageContent data={data} />
    </Layout>
  )
}

export default GalleryPage
