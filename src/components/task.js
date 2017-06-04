import React, { Component } from 'react'

class Task extends Component{
  render(){
  const { task, remove } = this.props;
  return(
    <li className="task-item">{task.text}<span className="fa fa-trash-o task-remover pull-right"
    onClick={() => {remove(task.id)}}>
    </span></li>
  );
}
}

export default Task;
