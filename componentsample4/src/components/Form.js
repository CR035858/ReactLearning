import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         topic : 'react'
      }
    }
    
    handleUsernameChange = (event) => {
        this.setState({
            username : event.target.value
        })
           
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments : event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic :event.target.value
        })
    }
    handleSubmit = (event) =>{
        alert(`${this.state.username} ${this.state.topic} ${this.state.comments} `)
        event.preventDefault()
    }
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>UserName</label>
                <input type="text" value = {this.state.username} onChange = {this.handleUsernameChange} />
            </div>
            <div>
                <label>Comments</label>
                <textarea value={this.state.comments} onChange = {this.handleCommentsChange} />
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange = {this.handleTopicChange}>
                    <option value="react">ReactJS</option>
                    <option value="angular">AngularJS</option>
                    <option value="vue">VueJS</option>
                </select>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
  }
}

export default Form
