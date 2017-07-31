import React, { Component } from 'react';
import styles from './TodoList.scss';
import classNames from 'classnames/bind';
import TodoItem from '../TodoItem';

const cx = classNames.bind(styles);

class TodoList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.todos !== nextProps.todos;
  }
  
  render() {
    const { todos, onToggle, onRemove } = this.props;
    const todoList = todos.map(
      todo => (
        <TodoItem 
          key={todo.id} 
          done={todo.done}
          onToggle={()=>onToggle(todo.id)}
          onRemove={(e)=>{ 
            onRemove(todo.id);
            e.stopPropagation();
            }
          }>
          {todo.text}
        </TodoItem>
      )
    )
    return (
      <div className={cx('todo-list')}>
        {todoList}
      </div>
    )
  }
}
export default TodoList;