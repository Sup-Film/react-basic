import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const BASE_URL = 'https://66c7f6e5732bf1b79fa7dd86.mockapi.io/todos'

function App() {
  const [todos, setTodos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function fetchTodo() {
    try {
      const response = await axios.get(BASE_URL)
      setTodos(response.data)
      setIsLoading(false)
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteTodo(id) {
    try {
      setIsLoading(true)
      const response = await axios.delete(`${BASE_URL}/${id}`)
      await fetchTodo()
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTodo()
  }, [])


  return (
    <>
      {isLoading && <div>Loading...</div>}
      {!isLoading &&
        <div>
          {
            todos.map((todo, index) => {
              return (
                <div key={todo.id}>
                  {todo.id} {todo.name} {todo.status}
                  <Link to={`/todo/${todo.id}`}>
                    <button>Edit</button>
                  </Link>
                  <button
                    onClick={async () => {
                      await deleteTodo(todo.id)
                    }}>Delete</button>
                </div>
              )
            })
          }
        </div>
      }
    </>
  )
}

export default App
