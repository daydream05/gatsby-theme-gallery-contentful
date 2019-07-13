import React from 'react'
import PropTypes from 'prop-types'

import Layout from './layout'
import PortfolioPageContent from './portfolio-page-content'


const PortfolioPage = ({ data, location }) => {
  let isModal = false
  // we can pass in a removeModal state to a Link
  // as an escape hatch.
  const removeModal = location.state && location.state.removeModal

  if (
    typeof window !== `undefined` &&
    // from gatsby browser
    window.___GATSBYGRAM_INITIAL_RENDER_COMPLETE &&
    // from location state
    !removeModal
  ) {
    isModal = true
  }

  return (
    <Layout location={location} isModal={isModal}>
      <PortfolioPageContent data={data} />
    </Layout>
  );
}

PortfolioPage.propTypes = {
  data: PropTypes.object,
  location: PropTypes.object.isRequired
};

export default PortfolioPage
