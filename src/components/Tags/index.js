import {Component} from 'react'

import TabItems from '../TabItems'

import LastItem from '../LastItem'

import './index.css'

class Tags extends Component {
  render() {
    const {tagsList, lists} = this.props
    const lengths = lists.length
    return (
      <div className="right-div">
        <h1 className="tag-name">Tags</h1>
        <ul className="tags-ul-list">
          {tagsList.map(each => (
            <TabItems each={each} key={each.optionId} />
          ))}
        </ul>
        <h1 className="tag-name">Tasks</h1>
        <ul>
          {lists.map(EachItem => (
            <LastItem EachItem={EachItem} lengths={lengths} key={EachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Tags
