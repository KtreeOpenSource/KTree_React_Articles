import React, { useState, useRef } from 'react'

const ClickTracker = () => {
  // State to force re-render
  const [renderCount, setRenderCount] = useState(0)

  // Ref to track button clicks without causing re-renders
  const clickCountRef = useRef(0)

  const handleButtonClick = () => {
    clickCountRef.current += 1
    console.log(`Button was clicked ${clickCountRef.current} times`)
  }

  const forceRender = () => {
    setRenderCount(prevRenderCount => prevRenderCount + 1)
  }

  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={handleButtonClick}>
        Click me
      </button>
      <button style={styles.button} onClick={forceRender}>
        Force re-render
      </button>
      <p style={styles.text}>Component render count: {renderCount}</p>
      <p style={styles.text}>Button click count (check console for updates)</p>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '10px',
    margin: '5px',
    cursor: 'pointer',
    backgroundColor: '#3498db',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
  text: {
    fontSize: '16px',
    margin: '10px 0',
  },
}

export default ClickTracker
