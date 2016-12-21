import React from 'react'

class PostListItem extends React.PureComponent {
  render () {
    const data = this.props.data
    return (
      <div>
        {
          this.props.type === 'text'
            ? <span>{data.get('summary')}</span>
            : <img src={data.get('photos').get(0).get('original_size').get('url')}/>
        }
      </div>
    )
  }
}
export  default PostListItem