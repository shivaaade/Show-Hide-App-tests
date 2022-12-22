// Write your code here

import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {first: '', second: ''}

  onchangeFirst = () => {
    this.setState(preval => {
      if (preval.first === '') {
        return {first: 'Joe'}
      }
      return {first: ''}
    })
  }

  onchangeSec = () => {
    this.setState(prev => {
      if (prev.second === '') {
        return {second: 'Jonas'}
      }
      return {second: ''}
    })
  }

  render() {
    const {first, second} = this.state
    return (
      <div className="container">
        <h1>Show/Hide</h1>
        <div className="buttonContainer">
          <div>
            <button onClick={this.onchangeFirst}>Show/Hide Firstname</button>
            <p>{first}</p>
          </div>
          <div>
            <button onClick={this.onchangeSec}>Show/Hide Lastname</button>
            <p>{second}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
