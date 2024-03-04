import React, { useState, useEffect } from 'react'
import axios from 'axios'

function CancellationOfPromises() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const source = axios.CancelToken.source() // Create a cancel token source

    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/data', {
          cancelToken: source.token, // Attach the cancel token to the request
        })

        if (!response.data) {
          throw new Error('No data received')
        }

        setData(response.data)
        setLoading(false)
      } catch (error) {
        if (!axios.isCancel(error)) {
          // Check if the error is due to cancellation
          setError(error.message)
          setLoading(false)
        }
      }
    }

    fetchData()

    return () => {
      // Cancel the request when the component unmounts
      source.cancel('Request canceled due to component unmount')
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

export default CancellationOfPromises
