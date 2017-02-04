// LIBS
import React from 'react'
// COMPONENTS
import Modal from './../Modal/Modal'
import ModalBox from './../Modal/ModalBox'
import ModalHeader from './../Modal/ModalHeader'
import ModalBody from './../Modal/ModalBody'
import ImageModalPreview from './../ImageModalPreview/ImageModalPreview'
import TextModalPreview from './../TextModalPreview/TextModalPreview'
// STYLES

class PostListItemView extends React.PureComponent {

    onModalClose() {
        const {hideModal, clearSelectedItem} = this.props
        clearSelectedItem()
        hideModal()
    }

    getItemElement(item) {
        return item.get('photos')
            ? <ImageModalPreview
                data={item}
            />
            : <TextModalPreview
                data={item}
            />

    }

    render() {
        const {modalVisible, selectedItem} = this.props
        return (
            <Modal visible={modalVisible}>
                <ModalBox>
                    <ModalHeader onCloseIconClick={::this.onModalClose}/>
                    <ModalBody>
                        {selectedItem && this.getItemElement(selectedItem)}
                    </ModalBody>
                </ModalBox>
            </Modal>
        )
    }
}
PostListItemView.propTypes = {
    hideModal: React.PropTypes.func
}
export default PostListItemView
