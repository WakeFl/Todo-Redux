import { useDispatch } from "react-redux"
import { removeTodo, completeTodo } from "../store/todoSlice"

const TodoItem = ({id,text,completed}) => {

  const dispatch = useDispatch()
  return (
    <li>
        <input type="checkbox" onChange={() => dispatch(completeTodo({id}))} checked={completed} />
        <p>{text}</p>
        <span onClick={() => dispatch(removeTodo({id}))}>&times;</span>
    </li>
  )
}

export default TodoItem