import React, { Component } from 'react'

class Form extends Component{

  render(){
    const { addTask } =this.props;
    let input;
    return(
      <div>
      <form onSubmit={(e) => {
        e.preventDefault();}}>
      <input ref={node => {
      input = node;
      }}
      type="text" placeholder="Enter task to list..." />
      <button onClick={(e) => {
        e.preventDefault();
        addTask(input.value);
        input.value='';
      }}
      className="button">+</button>
      <br/>
      </form>
      </div>
    );
  }
}

export default Form;
