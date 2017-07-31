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
    input: '',
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
  
  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  handleInsert = () => {
    const { todos, input } = this.state;

    const newTodo = {
      text: input,
      done: false,
      id: getId()
    };
    
    this.setState({
      todos: [...todos, newTodo],
      input: ''
    });
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    
    const toggled = {
      ...todos[index],
      done: !todos[index].done
    };

    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

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