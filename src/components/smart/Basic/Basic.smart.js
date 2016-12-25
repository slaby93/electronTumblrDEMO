// LIBS
import React from 'react'
import { connect } from 'react-redux'
import bemClassName from 'bem-classname'
// COMPONENTS
import SearchBox from './../../dumb/SearchBox/SearchBox'
import PostList from './../../dumb/PostList/PostList'
import UserPresentation from './../../dumb/UserPresentation/UserPresentation'
// ACTIONS
import getUserAction from './../../../actions/get-user'
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
    this.props.dispatch(getUserAction(userName))
  }

  render () {
    return (
      <div className={this.className()}>
        <SearchBox
          onSubmit={this.requestForUser.bind(this)}
          showLoader={this.props.showLoader}
          buttonText="Search"
        />
        <UserPresentation
          blogInfo={this.props.blogInfo}
        />
        <PostList
          items={this.props.postList}
        />
      </div>
    )
  }
}

function mapStateToProps (state) {
  console.log(state.get('tumblr').toJS())
  return {
    showLoader: state
      .get('tumblr')
      .get('loading'),
    postList: state
      .get('tumblr')
      .get('posts'),
    blogInfo: state
      .get('tumblr')
      .get('user')
  }
}
function mapDispatchToProps (dispatch) {
  return { dispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicContainer)
