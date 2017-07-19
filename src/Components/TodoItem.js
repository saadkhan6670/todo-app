import React from 'react';
import PropTypes from 'prop-types';
class TodoItem extends React.Component {
  deleteTodo(id){
    this.props.onDelete(id);
  }
  render(){
    return (
      <li className="Todos"> 
         <strong> {this.props.todo.NewTodo} : </strong> <i> {this.props.todo.TodoDate} </i>  {this.props.todo.status} <input className="btn btn-success"  type="button" value="Completed" onClick={this.deleteTodo.bind(this,this.props.todo.id)} />
    </li>
    )
  }
}

TodoItem.propTypes= {
  todo: PropTypes.object,
  onDelete: PropTypes.func
}

export default TodoItem;