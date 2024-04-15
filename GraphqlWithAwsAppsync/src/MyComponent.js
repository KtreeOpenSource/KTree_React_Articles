// MyComponent.js

import React, { useEffect, useState } from 'react'
import fetchData from './fetchData'

const MyComponent = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      const response = await fetchData()
      setData(response)
    }
    fetchDataAndSetState()
  }, [])

  return (
    <div>
      {data && (
        <ul>
          {data.getMyData.map(item => (
            <li key={item.id}>
              {item.name}: {item.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MyComponent
