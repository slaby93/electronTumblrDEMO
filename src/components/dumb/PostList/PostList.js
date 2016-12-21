import React from 'react'
import { List } from 'immutable'
// COMPONENTS
import PostListItem from './PostListItem'
class PostList extends React.PureComponent {
  constructor () {
    super()
  }

  createItemsFromData (itemList = new List([])) {
    const result = itemList.map((item, index) => {
      console.log('item', item.toJS())
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
      <div>
        {itemList}
      </div>
    )
  }
}

export default PostList