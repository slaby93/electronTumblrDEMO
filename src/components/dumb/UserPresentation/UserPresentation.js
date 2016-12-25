// LIBS
import React from 'react'
import bemClassName from 'bem-classname'
import { Map } from 'immutable'
// STYLE
import './UserPresentation.scss'
class UserPresentation extends React.PureComponent {
  constructor () {
    super()
    this.className = bemClassName.bind(null, 'UserPresentation')
  }

  render () {
    const name = this.props.blogInfo.get('name')
    const totalPosts = this.props.blogInfo.get('posts')
    const title = this.props.blogInfo.get('title')
    const userAvatar = `https://api.tumblr.com/v2/blog/${name}/avatar/128`
    console.log('this.props', this.props.blogInfo.toJS())
    return (
      <div className={this.className()}>
        <span>{title}</span>
        <div className={this.className('dataShow')}>
          <div
            className={this.className('avatar')}
          >
            <img
              src={userAvatar}
            />
          </div>
          <div className={this.className('infoWrapper')}>
            <span className={this.className('userName')}>{name}</span>
          </div>
        </div>
      </div>
    )
  }
}

UserPresentation.defaultProps = {
  blogInfo: new Map({})
}
export default UserPresentation