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
      this.props.onPageChange(limit * (dir - 1))
    }
  }

  createStartGroup ({ page, numberOfStartGroupElements }) {
    const result = []
    if (page === 1) {
      return result
    }
    for (let i = 1; i <= numberOfStartGroupElements; i++) {
      if (page > i)
        result.push(
          <span key={i} onClick={this.onPageChange.bind(this, i)}>
            {i}
          </span>
        )
    }
    return (<div className={this.className('startGroup', {
      'full': result.length === numberOfStartGroupElements
    })}>
      {result}
    </div>)
  }

  createLeftGroup ({ page, numberOfStartGroupElements, numberOfLeftGroupElements }) {
    const shouldShowItems = page > numberOfStartGroupElements + 1
    if (!shouldShowItems) {
      return []
    }
    const result = []
    for (let i = 1; i <= numberOfLeftGroupElements; i++) {
      const calcPage = page - i
      if (calcPage <= numberOfStartGroupElements) {
        continue
      }
      result.push(
        <span key={calcPage} onClick={this.onPageChange.bind(this, calcPage)}>
          {calcPage}
        </span>
      )
    }
    return (<div className={this.className('leftGroup')}>{result.reverse()}</div>)
  }

  createRightGroup ({ page, numberOfEndGroupElements, numberOfRightGroupElements, totalPages }) {
    const result = []
    const shouldShowItems = page < totalPages - numberOfEndGroupElements
    if (!shouldShowItems) {
      return result
    }
    for (let i = 1; i <= numberOfRightGroupElements; i++) {
      const x = page + i
      if (x > page) {
        result.push(<span key={x} onClick={this.onPageChange.bind(this, x)}>
          {x}
        </span>)
      }
    }
    return (<div className={this.className('rightGroup', {
      'full': result.length === numberOfRightGroupElements
    })}>
      {result}
    </div>)
  }

  createEndGroup ({ page, numberOfEndGroupElements, totalPages }) {
    const shouldShowItems = page < totalPages
    if (!shouldShowItems) {
      return []
    }
    const result = []
    for (let i = 0; i < numberOfEndGroupElements; i++) {
      const calcPage = totalPages - i
      if (page >= calcPage) {continue}
      result.push(
        <span key={calcPage} onClick={this.onPageChange.bind(this, calcPage)}>
          {calcPage}
        </span>
      )
    }
    return (<div className={this.className('endGroup')}>{result.reverse()}</div>)
  }

  render () {
    const { offset, limit, total } = this.props
    const page = Math.floor(offset / limit) + 1
    const totalPages = Math.ceil(total / limit)

    const numberOfStartGroupElements = 3
    const numberOfLeftGroupElements = 3
    const numberOfRightGroupElements = 3
    const numberOfEndGroupElements = 3

    const startGroup = this.createStartGroup({ page, numberOfStartGroupElements })
    const leftGroup = this.createLeftGroup({ page, numberOfStartGroupElements, numberOfLeftGroupElements })
    const rightGroup = this.createRightGroup({ page, numberOfEndGroupElements, numberOfRightGroupElements, totalPages })
    const endGroup = this.createEndGroup({ page, numberOfRightGroupElements, numberOfEndGroupElements, totalPages })
    return (
      <div className={this.className()}>
        <Icon nameClass={this.className('leftArrow')} onClick={this.onPageChange.bind(this, 'prev')}
              icon={leftArrowIcon}/>
        {startGroup}
        {leftGroup}
        <span className={this.className('currentPage')}>{page}</span>
        {rightGroup}
        {endGroup}
        <Icon nameClass={this.className('rightArrow')} onClick={this.onPageChange.bind(this, 'next')}
              icon={rightArrowIcon}/>
      </div>
    )
  }
}

export default BasicPaginator