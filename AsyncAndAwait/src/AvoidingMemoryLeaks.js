import React, { useState, useEffect } from 'react'

function AvoidingMemoryLeaks() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true // Flag to track component's mount status

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        if (!isMounted) {
          return // Ignore state updates if the component is unmounted
        }

        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }

        const result = await response.json()
        setData(result)
        setLoading(false)
      } catch (error) {
        if (isMounted) {
          setError(error.message)
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      isMounted = false // Set the flag to false when the component unmounts
    }
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

export default AvoidingMemoryLeaks
