import React, { useState, useEffect } from 'react'

const fetchDataWithTimeout = async timeout => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    }, timeout)
  })
}

const TimeoutExample = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const result = await fetchDataWithTimeout(5000)
        setData(result)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDataAsync()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  return <div>Data: {JSON.stringify(data)}</div>
}

export default TimeoutExample
