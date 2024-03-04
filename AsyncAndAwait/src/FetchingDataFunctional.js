import React, { useState, useEffect } from 'react'

const FetchingDataFunctional = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const result = await response.json()
        setData(result)
      } catch (error) {
        console.error('Failed to fetch data:', error)
      }
    }

    fetchData()
  }, []) // Empty dependency array to ensure useEffect runs only once on mount

  return (
    <div>
      {data ? (
        <div>
          <p key={data.id}>
            <strong>Title:</strong> {data.title}
          </p>
          <p>
            <strong>Completed:</strong> {data.completed.toString()}
          </p>
        </div>
      ) : (
        'Loading...'
      )}
    </div>
  )
}

export default FetchingDataFunctional
