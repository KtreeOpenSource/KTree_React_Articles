import React, { useEffect, useRef } from 'react'

const FocusInputOnMount = () => {
  const inputRef = useRef(null)

  useEffect(() => {
    // Set focus on the input element when the component mounts
    inputRef.current.focus()
  }, [])

  return (
    <div style={styles.container}>
      <input ref={inputRef} style={styles.input} placeholder='Start typing...' />
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '300px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
  },
}

export default FocusInputOnMount
