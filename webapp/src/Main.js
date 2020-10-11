import React, { Component } from "react";
 
class Main extends Component {
    constructor() {
        super();
        this.state = {
          textAreaValue: ""
        };
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({ textAreaValue: event.target.value });
      }
    render() {
    return (
        <div id="crux">
          <h1 >CRUX</h1>
        <div id="upload">
        
        <textarea
          value={this.state.textAreaValue}
          onChange={this.handleChange}
          rows={50}
          cols={250}
        />
        <button>Summarise</button>
      </div>
        </div>
        
    );
  }
}
 
export default Main;