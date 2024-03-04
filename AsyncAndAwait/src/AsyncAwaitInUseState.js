import React, { useState, useEffect } from 'react'

function AsyncAwaitInUseState() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        if (!response.ok) throw new Error('Data fetching failed')
        const result = await response.json()
        setData(result)
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
      <h2>Fetched Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default AsyncAwaitInUseState
