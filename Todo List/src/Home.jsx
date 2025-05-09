import { useEffect, useState } from "react"
import Create from "./Create"
import axios from "axios"
import { BsCircleFill,BsFillTrashFill,BsFillCheckCircleFill } from "react-icons/bs";


function Home() {
  const [todos,setTodos] = useState([])

  const API_URL = 'https://todo-list-backend-p1w8.onrender.com'
  
  useEffect(() => {
    axios.get(`${API_URL}/get`)
    .then(result => setTodos(result.data))
    .catch(err => console.log(err))
  },[])

  const handleEdit = (id) => {
    axios.put(`${API_URL}/update/${id}`)
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err))
  }

  const handleDelete = (id) => {
    axios.delete(`${API_URL}/delete/${id}`)
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="home">
      <h1>Todo List</h1>
      <Create/>
      {
        todos.length === 0 ?
        <div><h2>No Record</h2></div>:
        todos.map(todo => (
          <div className="task">
            <div className="checkbox" onClick={() => handleEdit(todo._id)}>
              {todo.done ? <BsFillCheckCircleFill className="icon"/>: <BsCircleFill className="icon"/>}
              <p className={todo.done ? 'line_through':''}>{todo.task}</p>
            </div>
            <div>
              <span><BsFillTrashFill className="icon" onClick={() => handleDelete(todo._id)}/></span>
            </div>
          </div>
        ) )
      }
    </div>
  )
}

export default Home