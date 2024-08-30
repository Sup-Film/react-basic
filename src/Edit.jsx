import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const BASE_URL = 'https://66c7f6e5732bf1b79fa7dd86.mockapi.io/todos'

function Edit() {
  const { id } = useParams()
  const [todo, setTodo] = useState({
    name: ''
  })

  async function fetchTodo(todoIds) {
    try {
      const response = await axios.get(`${BASE_URL}/${todoIds}`)
      setTodo(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  function handleNameChange(event) {
    setTodo((previousState) => ({
      ...previousState,
      name: event.target.value
    }))
  }

  async function updateName() {
    try {
      const response = await axios.put(`${BASE_URL}/${id}`, {
        name: todo.name
      })
      alert('Update successful!')
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchTodo(id)
  }, [id])

  return (
    <>
      <div>
        <h1>Edit {id}</h1>
      </div>
      <div>{todo.name}</div>
      <div>
        <input type="text" name="" id="" value={todo.name} onChange={handleNameChange}/>
        {todo.status}
      </div>
      <button onClick={() => updateName()}>Edit</button>
    </>
  )
}

export default Edit
