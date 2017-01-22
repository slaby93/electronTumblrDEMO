// LIBS
import React from 'react'
// COMPONENTS
import Modal from './../Modal/Modal'
import ModalBox from './../Modal/ModalBox'
import ModalHeader from './../Modal/ModalHeader'
// STYLES

class PostListItemView extends React.PureComponent {
  render () {
    const {modalVisible, hideModal} = this.props
    return (
      <Modal visible={modalVisible}>
        <ModalBox>
          <ModalHeader onCloseIconClick={hideModal} />
        </ModalBox>
      </Modal>
    )
  }
}
PostListItemView.propTypes = {
  hideModal: React.PropTypes.func
}
export default PostListItemView
