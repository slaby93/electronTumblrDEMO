import React from 'react'
import bemClassName from 'bem-classname'

class ImageModalPreview extends React.PureComponent {

    constructor() {
        super()
        this.classname = bemClassName.bind(null, 'ImageModalPreview')
    }

    render() {

        return (
            <div className={this.classname()}>
                IMAGE MODAL PREVIEW
            </div>
        )
    }
}
export default ImageModalPreview