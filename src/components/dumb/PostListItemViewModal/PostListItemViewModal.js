// LIBS
import React from 'react'
import bemClassName from 'bem-classname'
// COMPONENTS
import Modal from './../Modal/Modal'
import ModalBox from './../Modal/ModalBox'
import ModalHeader from './../Modal/ModalHeader'
import ModalBody from './../Modal/ModalBody'
import ModalFooter from './../Modal/ModalFooter'
import ImageModalPreview from './../ImageModalPreview/ImageModalPreview'
import TextModalPreview from './../TextModalPreview/TextModalPreview'
// STYLES
import './PostListItemViewModal.scss'

class PostListItemViewModal extends React.PureComponent {
    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'PostListItemViewModal')
    }

    onModalClose() {
        const {hideModal, clearSelectedItem} = this.props
        clearSelectedItem()
        hideModal()
    }

    onItemPreview() {
        console.log('ON ITEM PREVIEW')
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
            <Modal className={this.classname()} visible={modalVisible}>
                <ModalBox>
                    <ModalHeader onCloseIconClick={::this.onModalClose}/>
                    <ModalBody>
                        {selectedItem && this.getItemElement(selectedItem)}
                    </ModalBody>
                    <ModalFooter>
                        <div
                            className="previewButton"
                            onClick={::this.onItemPreview}
                        >
                            <div>
                                <span>Preview</span>
                            </div>
                        </div>
                        <div
                            className="closeButton"
                            onClick={::this.onModalClose}
                        >
                            <span>Close</span>
                        </div>
                    </ModalFooter>
                </ModalBox>
            </Modal>
        )
    }
}
PostListItemViewModal.propTypes = {
    hideModal: React.PropTypes.func
}
export default PostListItemViewModal
