import React, { Component } from 'react';
import styles from './TodoList.scss';
import classNames from 'classnames/bind';
import TodoItem from '../TodoItem';

const cx = classNames.bind(styles);

class TodoList extends Component {
  render() {
    const { todos } = this.props;
    const todoList = todos.map(
      todo => (
        <TodoItem key={todo.id} done={todo.done}>{todo.text}</TodoItem>
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