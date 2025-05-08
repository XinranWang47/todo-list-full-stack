import { useState } from "react"
import axios from 'axios'

function Create() {
  const [task,setTask] = useState()
  const API_URL = 'https://todo-list-backend-p1w8.onrender.com'
  const handleAdd = () => {
    axios.post(`${API_URL}/add`,{task:task})
    .then(result => {
      location.reload()
    })
    .catch(err => console.log(err))
  }
  return (
    <div className="create_form">
      <input type="text" placeholder="Add a new todo" onChange={(e) => setTask(e.target.value)}/>
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create
