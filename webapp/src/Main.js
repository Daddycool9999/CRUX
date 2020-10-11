import React, { Component } from "react";
import axios from 'axios';
 
class Main extends Component {
    constructor() {
        super();
        this.state = {
          textAreaValue: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
      }
      handleSubmit(event) {
       
        // console.log("HERE GO:");
        // console.log(this.state.value);
        
        axios 
        .post("http://localhost:8000/wel/", { 
            text: this.state.value,
        }) 
        .then((res) => { 
            // console.log(res.data);
            this.setState({ 
              value: res.data['text']
            }); 
        }) 
        .catch((err) => {
          console.log("ERROR");
        }); 
        event.preventDefault();
      }
    
      handleChange(event) {
        this.setState({ value: event.target.value });
        
        // this.state.textAreaValue=this.state.value;
        // console.log(this.state.value);
      }
      

    render() {
    return (
        <div id="crux">
          <h1 >CRUX</h1>
      
        <form id="para" onSubmit={this.handleSubmit}>  
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
          rows={50}
          cols={250}
        
        />
         <input type="submit" value="Summarise" />
        </form>
       
     
        </div>
        
    );
  }
}
 
export default Main;