import React from 'react';

class Icon extends React.Component {

  translateIcon (icon) {
    let result = icon
      .replace(/%3C/g, '<')
      .replace(/%3E/g, '>')
    result = result
      .substr(
        result.search(/<svg/g)
      )
    return result
  }

  render () {
    const translatedIcon = this.translateIcon(this.props.icon)
    return (
      <div onClick={this.props.onClick} className={this.props.nameClass}
           dangerouslySetInnerHTML={{ __html: translatedIcon }}>

      </div>
    );
  }
}

Icon.propTypes = {
  icon: React.PropTypes.string.isRequired
}

export default Icon;