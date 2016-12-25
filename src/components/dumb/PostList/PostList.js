import React from 'react'
import { List } from 'immutable'
import bemClassName from 'bem-classname'
// COMPONENTS
import PostListItem from './PostListItem'
// STYLES
import './PostList.scss'

class PostList extends React.PureComponent {
  constructor () {
    super()
    this.className = bemClassName.bind(null, 'PostList')
  }

  createItemsFromData (itemList = new List([])) {
    const result = itemList.map((item, index) => {
      return (
        <PostListItem
          key={index}
          data={item}
          type={item.get('type')}
        />
      )
    })
    return result
  }

  render () {
    const itemList = this.createItemsFromData(this.props.items)
    return (
      <div className={this.className()}>
        {itemList}
      </div>
    )
  }
}

export default PostList
