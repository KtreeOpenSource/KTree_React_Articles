import React, { useState, useEffect } from 'react'

function ParallelAsyncOperations() {
  const [todo1Data, setTodo1Data] = useState(null)
  const [todo2Data, setTodo2Data] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [todo1Response, todo2Response] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/todos/1'),
          fetch('https://jsonplaceholder.typicode.com/todos/2'),
        ])

        if (!todo1Response.ok || !todo2Response.ok) {
          throw new Error('One or more requests failed')
        }

        const todo1DataJson = await todo1Response.json()
        const todo2DataJson = await todo2Response.json()

        setTodo1Data(todo1DataJson)
        setTodo2Data(todo2DataJson)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h2>Todo 1 Data:</h2>
      <pre>{JSON.stringify(todo1Data, null, 2)}</pre>

      <h2>Todo 2 Data:</h2>
      <pre>{JSON.stringify(todo2Data, null, 2)}</pre>
    </div>
  )
}

export default ParallelAsyncOperations
