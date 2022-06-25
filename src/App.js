import logo from './logo.svg';
import './index.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      value: '',
      list: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      list: this.state.list
    });
  }

  handleSubmit(event) {
    this.setState({
      list: this.state.list.concat(this.state.value),
      value: ""
    });
    event.preventDefault();
  }

  render(){
    const listElements = this.state.list.map((element) =>
      <li>{element}</li>
    );

    return(
      <div class="app">
        <div class='title'>
          <h1>LeetCode To-Do List</h1>
        </div>
        
        <div class="row">
          <div class="main_column">
            <h3>Which question do you want to do?</h3>

            <form onSubmit={this.handleSubmit}>
              <input class="textbox" type="text" id="test" placeholder="Type your question here..." size="30" value={this.state.value} onChange={this.handleChange} />
              <input class="button" type="submit" value="Add" />
            </form>

            <br>
            </br>

            <div>
              <ul class="todo_elements" >{listElements}</ul>
            </div>
          </div>

          <div class="sub_column">
            <div class="sub_column_fill">
              <h4>Try it out!</h4>
              {/* Add the API stuff in here */}
            </div>
          </div>

        </div>
      </div>  
    )
  }
}

export default App;
