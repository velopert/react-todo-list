import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

// todo 아이템에 부여되는 id 로서 10부터 시작합니다.
let id = 10;
function getId() {
  return ++id;
}

class App extends Component {
  state = {
    todos: [
      {
        text: '리액트 공부하기',
        id: 0,
        done: true
      },
      {
        text: '컴포넌트 스타일링해보기',
        id: 1,
        done: false
      }
    ]
  }
  render() {
    const { todos } = this.state;

    return (
      <PageTemplate>
        <TodoInput/>
        <TodoList todos={todos}/>
      </PageTemplate>
    );
  }
}

export default App;