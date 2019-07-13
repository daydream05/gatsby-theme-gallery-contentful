import React from 'react'

import Layout from './layout'
import GalleryPageContent from './gallery-page-content'

const GalleryPage = ({ data, location }) => {
  const isBehindAModal = location.state && location.state.isBehindAModal 
  return (
    <Layout location={location}>
      <GalleryPageContent data={data} isBehindAModal={isBehindAModal} />
    </Layout>
  );
}

export default GalleryPage
