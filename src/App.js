import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './store/todoSlice';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {
  const [text, setText] = useState("");


  const dispatch = useDispatch()

  return (
    <div className="App">
      <TodoForm
        text={text}
        setText={setText}
        addTodos={() => dispatch(addTodo({ text }))} />
      <TodoList />
    </div>

  )
}

export default App;
