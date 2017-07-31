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
    input: '', // 인풋의 값
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
  
  // 인풋 상태 수정
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  // 새 데이터 추가
  handleInsert = () => {
    const { todos, input } = this.state;

    // 새 데이터 객체 생성
    const newTodo = {
      text: input,
      done: false,
      id: getId()
    };
    
    // 배열 안에 새 데이터를 집어넣습니다.
    this.setState({
      todos: [...todos, newTodo],
      input: ''
    });
  }

  // 투두아이템 토글하기
  handleToggle = (id) => {
    // id 로 배열의 인덱스를 찾습니다.
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    
    // 찾은 데이터의 done 값을 반전시킵니다.
    const toggled = {
      ...todos[index],
      done: !todos[index].done
    };

    // slice 를 통하여 우리가 찾은 index 전 후의 데이터들을 복사합니다
    // 그리고 그 사이에는 변경된 투두 객체를 넣어줍니다.
    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  // 선택한 id 를 배열에서 제거해줍니다.
  handleRemove = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    // slice 로 전 후 데이터들을 복사하고, 우리가 찾은 index 는 제외시킵닏3ㅏ.
    this.setState({
      todos: [
        ...todos.slice(0, index),
        ...todos.slice(index + 1, todos.length)
      ]
    });


  }

  render() {
    const { todos, input } = this.state;
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;

    return (
      <PageTemplate>
        <TodoInput 
          onChange={handleChange}
          onInsert={handleInsert}
          value={input}
        />
        <TodoList 
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </PageTemplate>
    );
  }
}

export default App;