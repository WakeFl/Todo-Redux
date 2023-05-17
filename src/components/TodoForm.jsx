const TodoForm = ({text,setText,addTodos}) => {

  const addTodo = () => {
    addTodos()
    setText('')
  }

  return (
    <div>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
    </div>
  )
}

export default TodoForm