import logo from './logo.svg';
import './index.css';
import React, {Component} from 'react';

class App extends Component{
  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list:[]
    }
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

          </div>

          <div class="sub_column"></div>

        </div>
      </div>  
    )
  }
}

export default App;
