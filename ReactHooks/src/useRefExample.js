import React, { useRef, useEffect } from 'react'

function MyForm() {
  const firstInputRef = useRef(null)

  useEffect(() => {
    firstInputRef.current.focus()
  }, [])

  return (
    <form>
      <label>
        First Name:
        <input ref={firstInputRef} type='text' />
      </label>
      {/* Additional input fields */}
    </form>
  )
}

export default MyForm
