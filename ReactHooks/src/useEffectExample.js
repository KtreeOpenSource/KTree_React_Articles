import React, { useEffect, useState } from 'react'

function Posts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        let trimmedData = data.slice(0, 5)
        setPosts(trimmedData)
      } catch (error) {
        console.error('Error fetching posts:', error)
      }
    }

    fetchPosts()

    return () => {
      // Cleanup function
    }
  }, [])

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <p>{post.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Posts
