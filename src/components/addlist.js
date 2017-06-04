import React, { Component } from 'react';
import Task from './task';

class Addlist extends Component{
render(){
  const { tasks , remove} = this.props;
  const taskNode = tasks.map((task) => {
    return(<Task task={task} key={task.id} remove={remove}/>)
  });
  return(
    <div>
    <ul className="list">
    {taskNode}</ul>
    </div>
  );
}

}

export default Addlist;
