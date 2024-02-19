import React, { useRef, useState, useEffect } from 'react'

const AutoFocusInputForm = () => {
  const firstInputRef = useRef(null)
  const secondInputRef = useRef(null)
  const thirdInputRef = useRef(null)

  const [firstInput, setFirstInput] = useState('')
  const [secondInput, setSecondInput] = useState('')
  const [thirdInput, setThirdInput] = useState('')

  const handleInputChange = (input, setInput, nextInputRef, maxLength) => {
    setInput(input)
    if (input.length === maxLength && nextInputRef) {
      nextInputRef.current.focus()
    }
  }

  useEffect(() => {
    firstInputRef.current.focus()
  }, [])

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>AutoFocus Input Form</h2>
      <form>
        <div style={styles.inputContainer}>
          <label>First Input: </label>
          <input
            ref={firstInputRef}
            style={styles.input}
            type='text'
            value={firstInput}
            onChange={e => handleInputChange(e.target.value, setFirstInput, secondInputRef, 3)}
            maxLength={3}
          />
        </div>

        <div style={styles.inputContainer}>
          <label>Second Input: </label>
          <input
            ref={secondInputRef}
            style={styles.input}
            type='text'
            value={secondInput}
            onChange={e => handleInputChange(e.target.value, setSecondInput, thirdInputRef, 4)}
            maxLength={4}
          />
        </div>

        <div style={styles.inputContainer}>
          <label>Third Input: </label>
          <input
            ref={thirdInputRef}
            style={styles.input}
            type='text'
            value={thirdInput}
            onChange={e => handleInputChange(e.target.value, setThirdInput, null, 5)}
            maxLength={5}
          />
        </div>
      </form>
    </div>
  )
}

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  inputContainer: {
    marginBottom: '15px',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '200px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
    marginLeft: '10px', // Added some left margin for better separation
  },
}

export default AutoFocusInputForm
