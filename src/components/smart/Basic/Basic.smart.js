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
    return (
      <div className={this.className()}>
        <BasicTopBar
          onSubmit={this.requestForUser.bind(this)}
          showLoader={this.props.showLoader}
                    />
        <PostList
          items={this.props.postList}
          showLoader={this.props.showLoader}
                    />
        {this.props.postList && <BasicPaginator
          offset={this.props.offset}
          limit={this.props.limit}
          total={this.props.total}
          onPageChange={this.onChangePage.bind(this)}
                    />}
      </div>
    )
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
            .get('limit')
  }
}
function mapDispatchToProps (dispatch) {
  return {dispatch}
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicContainer)
