import React from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoItem = ({done, children}) => {
  return (
    <div className={cx('todo-item')}>
      <input className={cx('tick')} type="checkbox" checked={done}/>
      <div className={cx('text')}>{children}</div>
      <div className={cx('delete')}>[지우기]</div>
    </div>
  );
};

export default TodoItem;