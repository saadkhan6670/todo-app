import React from 'react';
import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'
import uuid from 'uuid'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }
  getTodos() {
    this.setState({
      todos: [
        {
          id: uuid.v4(),
          NewTodo: "Get Up Early",
          TodoDate: "20-7-2017",
          status: "Incomplete"
        },
        {
          id: uuid.v4(),
          NewTodo: "Do Breakfast",
          TodoDate: "19-7-2017",
          status: "Incomplete"
        },
        {
          id: uuid.v4(),
          NewTodo: "Become a Pulumber",
          TodoDate: "21-7-2017",
          status: "Incomplete"
        }

      ]
    });

  }

  //life sycle methods
  componentWillMount() {
   // this.getTodos();
  }


  //take this stae and pass it to todo as property
  handelAddTodo(todo) {
    let todos = this.state.todos;
    todos.push(todo);
    //resetting the state after adding the todo
    this.setState({ todos: todos });
  }

  handelDeleteTodo(id) {
    let todos = this.state.todos;
    //findIndex will look through the ids and find the id which is being fwded
    let index = todos.findIndex(x => x.id === id);
    todos.splice(index, 1);
    //resetting the state after deleting the todo
    this.setState({ todos: todos });

  }

  render() {
    return (
      
     <centre> <div className="App">
        <AddTodo addTodo={this.handelAddTodo.bind(this)} />
        <Todos todos={this.state.todos} onDelete={this.handelDeleteTodo.bind(this)} />
      </div>
      </centre>
      

    )
  }
}


export default App