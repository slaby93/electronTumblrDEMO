import React from 'react'

class Icon extends React.Component {

  translateIcon (icon) {
    let result = icon
            .substr(1, icon.length - 1) // takes values between ""
            .replace(/%3C/g, '<')
            .replace(/%3E/g, '>')
            .replace(/"/g, '')
    result = result
            .substr(
                result.search(/<svg/g) // trims plugin text
            )
    return result
  }

  render () {
    const translatedIcon = this.translateIcon(this.props.icon)
    return (
      <div onClick={this.props.onClick} className={this.props.nameClass}
        dangerouslySetInnerHTML={{__html: translatedIcon}} />
    )
  }
}

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired,
  nameClass: React.PropTypes.string
}

export default Icon
