import React, { Component } from 'react'

class FetchingDataClass extends Component {
  state = { data: null }

  async componentDidMount() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const data = await response.json()
      this.setState({ data })
    } catch (error) {
      console.error('Failed to fetch data:', error)
    }
  }

  render() {
    const { data } = this.state

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
}

export default FetchingDataClass
