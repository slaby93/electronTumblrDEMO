// LIBS
import React from 'react'
import bemClassName from 'bem-classname'
import moment from 'moment'
import { POST_TYPE } from './../../../constants/tumblr.constants'
// STYLES
import './PostListItem.scss'

class PostListItem extends React.PureComponent {
  constructor () {
    super()
    this.className = bemClassName.bind(null, 'PostListItem')
  }

  render () {
    const { type, date, photos } = this.props.data.toJS()
    const formattedDate = moment(new Date(date)).format('DD/MM/YYYY')

    return (
      <div className={this.className()}>
        {
          type === 'photo'
            ?
            <img
              className={this.className('photoPreview')}
              src={photos[ 0 ].original_size.url}
            />
            : <span>TEXT</span>
        }
      </div>
    )
  }
}
export default PostListItem