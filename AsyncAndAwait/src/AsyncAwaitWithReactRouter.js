import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const AsyncAwaitWithReactRouter = () => {
  const { todoId } = useParams()
  const [todoData, setTodoData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTodoData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)

        if (!response.ok) {
          throw new Error('Failed to fetch todo data')
        }

        const todoData = await response.json()
        setTodoData(todoData)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }

    fetchTodoData()
  }, [todoId])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h2>Todo Details:</h2>
      <pre>{JSON.stringify(todoData, null, 2)}</pre>
    </div>
  )
}

export default AsyncAwaitWithReactRouter
