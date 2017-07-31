import React, { Component } from 'react';
import styles from './TodoList.scss';
import classNames from 'classnames/bind';
import TodoItem from '../TodoItem';

const cx = classNames.bind(styles);

class TodoList extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // todos 배열 내용이 바뀔때만 re-render 를 진행합니다.

    return this.props.todos !== nextProps.todos;
  }
  
  render() {
    const { todos, onToggle, onRemove } = this.props;
    // todos 배열을 TodoItem 컴포넌트 배열로 변환합니다.
    // 각 컴포넌트마다 onToggle 과 onRemove 를 실행 할 때 다른 파라미터를 전달하기 위해서
    // 화살표 함수로 함수를 정의해줍니다.
    const todoList = todos.map(
      todo => (
        <TodoItem 
          key={todo.id} 
          done={todo.done}
          onToggle={()=>onToggle(todo.id)}
          onRemove={()=>onRemove(todo.id)}>
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