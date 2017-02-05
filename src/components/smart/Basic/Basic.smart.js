// LIBS
import React from 'react'
import {connect} from 'react-redux'
import bemClassName from 'bem-classname'
// COMPONENTS
import PostList from './../../dumb/PostList/PostList'
import BasicTopBar from './../../dumb/BasicTopBar/BasicTopBar'
import BasicPaginator from '../../dumb/BasicPaginator/BasicPaginator'
// ACTIONS
import getUserAction from './../../../actions/get-user'
import getNewPageAction from './../../../actions/get-new-page'
import resetUser from '../../../actions/reset-user'
import {SHOW_MODAL, HIDE_MODAL} from './../../../ducks/Modal'
import {SET_SELECTED_ITEM, CLEAR_SELECTED_ITEM} from './../../../ducks/Tumblr'
// STYLES
import './BasicContainer.scss'

class BasicContainer extends React.PureComponent {
  constructor () {
    super()
    this.state = {
      inputedUserName: ''
    }
    this.className = bemClassName.bind(this, 'BasicContainer')
  }

  requestForUser (userName) {
    if (!userName) {
      this.props.dispatch(resetUser())
      return
    }
    this.props.dispatch(getUserAction(userName))
  }

  onChangePage (offset) {
    this.props.dispatch(getNewPageAction(offset))
  }

  render () {
    const {
            postList,
            selectedItem,
            setSelectedItem,
            clearSelectedItem,
            showLoader,
            showModal,
            hideModal,
            offset,
            limit,
            total,
            modalVisible
        } = this.props
    return (
      <div className={this.className()}>
        <BasicTopBar
          onSubmit={this.requestForUser.bind(this)}
          showLoader={showLoader}
                />
        <PostList
          items={postList}
          showLoader={showLoader}
          modalVisible={modalVisible}
          showModal={showModal}
          hideModal={hideModal}
          setSelectedItem={setSelectedItem}
          clearSelectedItem={clearSelectedItem}
          selectedItem={selectedItem}
                />
        {this.props.postList && <BasicPaginator
          offset={offset}
          limit={limit}
          total={total}
          onPageChange={this.onChangePage.bind(this)}
                />}
      </div>
    )
  }
}
function getSelectedItemFromState (state) {
  const posts = state
        .get('tumblr')
        .get('posts')
  if (posts) {
    return posts.filter(item => item.get('id') === state.get('tumblr').get('selectedItem')).get(0)
  }
}
function mapStateToProps (state) {
  return {
    showLoader: state
            .get('tumblr')
            .get('loading'),
    postList: state
            .get('tumblr')
            .get('posts'),
    blogInfo: state
            .get('tumblr')
            .get('user'),
    offset: state
            .get('tumblr')
            .get('offset'),
    total: state
            .get('tumblr')
            .get('total'),
    limit: state
            .get('tumblr')
            .get('limit'),
    modalVisible: state
            .get('modal')
            .get('visible'),
    selectedItem: getSelectedItemFromState(state)
  }
}
function mapDispatchToProps (dispatch) {
  return {
    dispatch,
    showModal: () => {
      dispatch(SHOW_MODAL())
    },
    hideModal: () => {
      dispatch(HIDE_MODAL())
    },
    setSelectedItem: (id) => {
      dispatch(SET_SELECTED_ITEM(id))
    },
    clearSelectedItem: () => {
      dispatch(CLEAR_SELECTED_ITEM())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicContainer)
