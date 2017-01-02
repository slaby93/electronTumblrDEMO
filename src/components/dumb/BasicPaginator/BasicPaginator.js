// LIBS
import React from 'react'
import bemClassName from 'bem-classname'
// COMPONENTS
import Icon from './../Icon/Icon'
// RESOURCES
import leftArrowIcon from './../../../resources/icons/back_arrow.svg'
import rightArrowIcon from './../../../resources/icons/next_arrow.svg'
// STYLES
import './BasicPaginator.scss'

class BasicPaginator extends React.Component {
  constructor () {
    super()
    this.className = bemClassName.bind(null, 'BasicPaginator')
  }

  onPageChange (dir) {
    const { offset, limit }= this.props
    if (dir === 'next') {
      this.props.onPageChange(offset + limit)
    } else if (dir === 'prev') {
      this.props.onPageChange(Math.max(offset - limit, 0))
    } else {
      throw new Error('Not Yet Supported')
    }
  }

  render () {
    const { offset, limit, total } = this.props
    const page = Math.floor(offset / limit) + 1
    const totalPages = Math.ceil(total / limit)
    return (
      <div className={this.className()}>
        <Icon nameClass={this.className('leftArrow')} onClick={this.onPageChange.bind(this, 'prev')}
              icon={leftArrowIcon}/>
        {page}/{totalPages}
        <Icon nameClass={this.className('rightArrow')} onClick={this.onPageChange.bind(this, 'next')}
              icon={rightArrowIcon}/>


      </div>
    )
  }
}

export default BasicPaginator