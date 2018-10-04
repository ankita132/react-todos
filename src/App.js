import React, { Component } from 'react';
import Header from './components/header';
import Form from './components/form';
import Addlist from './components/addlist';

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      addlist:[],
      count:0
    }
  }

  addTask(val){
    const task = {
      text:val,
      id:this.state.count++
    }

    if(val.length > 0)
  { this.state.addlist.push(task);
  }
    this.setState({
      addlist: this.state.addlist,
      text:''
    });
  }

  removeTask(id){
    const list = this.state.addlist.filter((task) => {
      if(task.id !== id)
      return task;
      else
    {
      this.state.count--;
    }
    });

    this.setState({
      addlist: list
    });
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Form addTask={this.addTask.bind(this)}/>
      <Addlist
      tasks={this.state.addlist}
      remove={this.removeTask.bind(this)}
      />
      </div>
    );
  }
}

export default App;
