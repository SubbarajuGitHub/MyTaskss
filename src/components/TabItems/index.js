import {Component} from 'react'

import './index.css'

class TabItems extends Component {
  render() {
    const {each} = this.props
    const {displayText} = each
    return (
      <li>
        <button className="para" type="button">
          {displayText}
        </button>
      </li>
    )
  }
}
export default TabItems
