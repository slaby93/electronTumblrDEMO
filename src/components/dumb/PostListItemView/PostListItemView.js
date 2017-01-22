// LIBS
import React from 'react'
// COMPONENTS
import Modal from './../Modal/Modal'
import ModalBox from './../Modal/ModalBox'
import ModalHeader from './../Modal/ModalHeader'
// STYLES

class PostListItemView extends React.PureComponent {
    render() {
        return (
            <Modal>
                <ModalBox>
                    <ModalHeader/>
                </ModalBox>
            </Modal>
        )
    }
}

export default PostListItemView
