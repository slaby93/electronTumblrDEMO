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
    const name = this.props.name
    const userAvatar = `https://api.tumblr.com/v2/blog/${name}/avatar/128`
    return (
      <div className={this.className()}>
        <div className={this.className('avatar')}>
          <img src={userAvatar}/>
        </div>
        <span className={this.className('userName')}>{name}</span>
      </div>
    )
  }
}

UserPresentation.defaultProps = {
  blogInfo: new Map({})
}
export default UserPresentation