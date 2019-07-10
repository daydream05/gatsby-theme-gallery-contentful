import React from 'react'
import { PageRenderer } from 'gatsby'

console.log(PageRenderer)
// We dynamically import Modal
let Modal
import(`../components/modal`).then(modal => {
  Modal = modal.default;
})

let windowWidth

const Layout = (props) => {
  const { location, isModal, children } = props

  //
  let shouldModal = false

  if (!windowWidth && typeof window !== `undefined`) {
    windowWidth = window.innerWidth
  }

  // only set modal if not on mobile and if the page
  if (isModal && windowWidth > 750) {
    shouldModal = true
  }
  
  // render modal here
  if (shouldModal && Modal) {
    return (
      <React.Fragment>
        <PageRenderer location={{ pathname: `/gallery/` }} />
        <Modal isOpen location={location}>
          {children}
        </Modal>
      </React.Fragment>
    );
  }

  // regular layout
  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  )
}

export default Layout