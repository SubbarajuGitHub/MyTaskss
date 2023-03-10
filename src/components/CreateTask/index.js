import {Component} from 'react'

import Tags from '../Tags'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class CreateTask extends Component {
  state = {task: '', activeId: tagsList[0].optionId, lists: []}

  UserTask = event => {
    const {task} = this.state
    this.setState({task: event.target.value})
  }

  onChangeTask = event => {
    const {activeId} = this.state
    this.setState({activeId: event.target.value})
  }

  addTasks = event => {
    event.preventDefault()
    const {task, activeId, lists} = this.state
    const newTask = {
      task,
      activeId,
    }
    this.setState(prevState => ({
      lists: [...prevState.lists, newTask],
      task: '',
    }))
  }

  render() {
    const {lists, task} = this.state
    return (
      <div className="left-right-div">
        <div className="left-div">
          <h1 className="heading">Create a task!</h1>
          <form onSubmit={this.addTasks}>
            <label htmlFor="Task" className="lables">
              Task
            </label>
            <br />
            <input
              type="text"
              id="task"
              className="inputs"
              onChange={this.UserTask}
              value={task}
              placeholder="Enter the task here"
            />
            <br />
            <p className="lables">Tags</p>
            <br />
            <select className="inputs" onChange={this.onChangeTask}>
              {tagsList.map(EachItem => (
                <option key={EachItem.optionId}>{EachItem.displayText}</option>
              ))}
            </select>
            <br />
            <button type="submit" className="submit-button">
              Add Task
            </button>
          </form>
        </div>
        <div className="right-div">
          <Tags tagsList={tagsList} lists={lists} key={tagsList.optionId} />
        </div>
      </div>
    )
  }
}
export default CreateTask
