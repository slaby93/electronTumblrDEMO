// LIBS
import React from 'react'
import bemClassName from 'bem-classname'
import { Map } from 'immutable'
// STYLES
import './PostListItem.scss'

class PostListItem extends React.PureComponent {
  constructor () {
    super()
    this.className = bemClassName.bind(null, 'PostListItem')
  }

  createImageItem ({ photos }) {
    return <img
      className={this.className('photoPreview')}
      src={photos[ 0 ].original_size.url}
    />
  }

  createTextItem ({summary}) {
    return <span>{summary}</span>
  }

  render () {
    const item = this.props.data.get('type') === 'photo'
      ? this.createImageItem(this.props.data.toJS())
      : this.createTextItem(this.props.data.toJS())
    return (
      <div className={this.className()}>
        {item}
      </div>
    )
  }
}

PostListItem.defaultProps = {
  data: new Map({})
}
export default PostListItem
