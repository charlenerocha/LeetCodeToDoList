import logo from './logo.svg';
import './index.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      value: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render(){
    return(
      <div class="app">
        <div class='title'>
          <h1>LeetCode To-Do List</h1>
        </div>
        
        <div class="row">
          <div class="main_column">
            <h3>Which question do you want to do?</h3>
<<<<<<< HEAD
=======
              
            <input
              class="text"
              type="text"
              size="30"
              placeholder="Type your question here..."
            />

            <button
              class="text"
              type="text"
              onclick="myFunction()"
            >Add..</button>

            {/* <script>
            document.getElementById("text").onclick = function() {myFunction()};

            function myFunction() {
              document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
            }
            </script> */}
>>>>>>> 3bd6c06db1b2e5dabea74fde1e24e55abd870d0b

            <form onSubmit={this.handleSubmit}>
              <input class="text" type="text" id="test" placeholder="Type your question here..." value={this.state.value} onChange={this.handleChange} />
              <input class="text" type="submit" value="Add" />
            </form>

            <br>
            </br>

            <div>
              I was gonna figure out how to print the state here
            </div>
          </div>

          <div class="sub_column"></div>

        </div>
      </div>  
    )
  }
}

export default App;
