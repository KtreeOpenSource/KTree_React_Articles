import React, { useState } from 'react'

const updateUserInDatabase = async newUserData => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH', // Assuming you're updating an existing resource
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUserData),
  })

  if (!response.ok) {
    throw new Error('Failed to update user in the database')
  }

  // If successful, you might return the updated data or handle it according to your needs
  const updatedUserData = await response.json()
  return updatedUserData
}

const OptimisticUIUpdates = () => {
  const initialUserData = {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit\n' +
      'suscipit...placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
  }

  const [user, setUser] = useState(initialUserData)

  const handleUserUpdate = async newUserData => {
    try {
      // Optimistically update the UI
      setUser(newUserData)
      // Perform the asynchronous operation
      await updateUserInDatabase(newUserData)
    } catch (error) {
      // Handle errors and rollback UI changes if necessary
      console.error('Failed to update user:', error)
      // Rollback UI changes
      setUser(initialUserData)
    }
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>
        <strong>Title:</strong> {user.title}
      </p>
      <p>
        <strong>Body:</strong> {user.body}
      </p>
      <button
        onClick={() =>
          handleUserUpdate({
            ...user,
            title: 'Updated Title',
            body: 'Updated Body',
          })
        }
      >
        Update User
      </button>
    </div>
  )
}

export default OptimisticUIUpdates
