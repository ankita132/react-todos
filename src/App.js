import React, { Component } from 'react';
import Header from './components/header';
import Form from './components/form';
import Addlist from './components/addlist';
import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDbf4aDgY63YE6ZU0ik5ZrRqPCPrzzkivo",
    authDomain: "react-todos-35a8d.firebaseapp.com",
    databaseURL: "https://react-todos-35a8d.firebaseio.com",
    projectId: "react-todos-35a8d",
    storageBucket: "react-todos-35a8d.appspot.com",
    messagingSenderId: "542441785684"
  };
  firebase.initializeApp(config);

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      addlist:[],
      count:0
    }
  }


  /*  componentWillMount() {
      this.firebaseRef = firebase.database().ref('todoApp/items');
      this.firebaseRef.limitToLast(25).on('value', function(dataSnapshot) {
        var items = [];
        dataSnapshot.forEach(function(childSnapshot) {
          var item = childSnapshot.val();
          item['.key'] = childSnapshot.key;
          items.push(item);
        });

        this.setState({
          items: items
        });
      }.bind(this));
    }

    componentWillUnmount() {
    this.firebaseRef.off();
  }*/


  addTask(val){
    const task = {
      text:val,
      id:this.state.count++
    }

    if(val.length > 0)
  { this.state.addlist.push(task);
//    this.firebaseRef.push(task);
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
  //    var firebaseRef = firebase.database().ref('todoApp/items');;
//   firebaseRef.child(id).remove();
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
