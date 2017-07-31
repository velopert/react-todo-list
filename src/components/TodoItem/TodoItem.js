import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // done 값이 바뀔때만 re-render 를 진행합니다.
    return this.props.done !== nextProps.done;
  }
  
  render() {
    const {done, children, onToggle, onRemove} = this.props;
    return (
      <div className={cx('todo-item')} onClick={onToggle}>
        <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
        <div className={cx('text', { done })}>{children}</div>
        <div className={cx('delete')} onClick={e => {
            onRemove();
            // 제거 버튼이 todo-item 내부에 있기 때문에,
            // 이 버튼이 클릭되면 onToggle 도 함께 실행이됩니다.
            // e.stopPropagation() 을 실행하면 onToggle 이 실행되지 않게 됩니다.
            e.stopPropagation(); 
          }
        }>[지우기]</div>
      </div>
    );
  }
}

export default TodoItem;