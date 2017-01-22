// LIBS
import React from 'react'
import bemClassName from 'bem-classname'
import {Map} from 'immutable'
// STYLES
import './PostListItem.scss'

class PostListItem extends React.PureComponent {
  constructor () {
    super()
    this.className = bemClassName.bind(null, 'PostListItem')
  }

  createImageItem ({photos}) {
    return <img
      onClick={this.props.onClick}
      className={this.className('photoPreview')}
      src={photos[0].original_size.url}
        />
  }

  createTextItem ({summary}) {
    return <span onClick={this.props.onClick}>{summary}</span>
  }

  onClick () {
    console.log('CLICK')
  }

  render () {
    const {data} = this.props
    const item = this.props.data.get('type') === 'photo'
            ? this.createImageItem(data.toJS())
            : this.createTextItem(data.toJS())
    return (
      <div className={this.className()}>
        {item}
      </div>
    )
  }
}
PostListItem.propTypes = {
  onClick: React.PropTypes.func
}
PostListItem.defaultProps = {
  data: new Map({})
}
export default PostListItem
