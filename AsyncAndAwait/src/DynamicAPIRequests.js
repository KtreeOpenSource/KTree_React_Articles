import React, { useState, useEffect } from 'react'

const fetchData = async endpointOrUrl => {
  try {
    const url = `https://jsonplaceholder.typicode.com/${endpointOrUrl}`
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Failed to fetch data:', error)
    throw error
  }
}

const DynamicAPIRequests = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const [result1, result2] = await Promise.all([
          fetchData('todos/1'), // Fetch todo data for ID 1
          fetchData('todos/2'), // Fetch todo data for ID 2
        ])
        setData({ result1, result2 })
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

export default DynamicAPIRequests
