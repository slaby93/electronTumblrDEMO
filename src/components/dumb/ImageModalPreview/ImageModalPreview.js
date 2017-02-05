import React from 'react'
import bemClassName from 'bem-classname'
import './ImageModalPreview.scss'

class ImageModalPreview extends React.PureComponent {

  constructor () {
    super()
    this.classname = bemClassName.bind(null, 'ImageModalPreview')
  }

  getPhoto (data) {
    return data
            .get('photos')
            .get('0')
            .get('original_size')
            .get('url')
  }

  render () {
    const {data} = this.props
    const imageUrl = `url(${this.getPhoto(data)})`
    console.log('DATA', data.toJS())
    return (
      <div className={this.classname()}>
        <div className={this.classname('imageWrapper')}>
          <div
            className={this.classname('image')}
            style={{backgroundImage: imageUrl}} />
        </div>

      </div>
    )
  }
}
export default ImageModalPreview
