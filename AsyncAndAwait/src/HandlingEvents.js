import React, { useState } from 'react'

export default function HandlingEvents() {
  const [data, setData] = useState(null)
  const handleButtonClick = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const result = await response.json()
      setData(result)
    } catch (error) {
      console.error('Failed to fetch data:', error)
    }
  }
  return (
    <div>
      <button onClick={handleButtonClick}>Click Me To Fecth Data</button>
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
