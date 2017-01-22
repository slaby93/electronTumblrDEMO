// LIBS
import React from 'react'
import {List} from 'immutable'
import bemClassName from 'bem-classname'
import {ProgressCircle} from 'react-desktop/macOs'
import ScrollBar from './../ScrollBar/ScrollBar'
// COMPONENTS
import PostListItem from './PostListItem'
import PostListItemView from './../PostListItemView/PostListItemView'
// STYLES
import './PostList.scss'

class PostList extends React.PureComponent {
  constructor () {
    super()
    this.className = bemClassName.bind(null, 'PostList')
  }

  createItemsFromData (itemList) {
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
    const showLoader = this.props.showLoader && itemList.length !== 0
    return (
      <div className={this.className()}>
        <PostListItemView />
        <ScrollBar>
          {itemList}
        </ScrollBar>
        { showLoader &&
        <div className={this.className('loaderScreen')}>
          <ProgressCircle
            size={25}
            color='white'
            hidden={!this.props.showLoader} />
        </div>
                }
      </div>
    )
  }
}
PostList.defaultProps = {
  items: new List([])
}
export default PostList
