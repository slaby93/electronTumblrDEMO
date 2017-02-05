// LIBS
import './SideBar.scss'
import React from 'react'
import bemClassname from 'bem-classname'
// COMPONENTS
import MenuItem from './MenuItem'

class SideBar extends React.PureComponent {
    constructor() {
        super()
        this.className = bemClassname.bind(null, 'SideBar')
    }

    mapItemsToElements(items, index) {
        const result = items.map((item) => {
            return (
                <MenuItem
                    key={item.get('path')}
                    name={item.get('name')}
                    path={item.get('path')}
                />)
        })

        return result
    }

    render() {
        const items = this.mapItemsToElements(this.props.items)
        return (
            <div className={this.className()}>
                {items}
                <video className={this.className('video')} preload autoPlay loop muted>
                    <source src="./../resources/a.mp4"/>
                </video>
            </div>
        )
    }
}

export default SideBar
