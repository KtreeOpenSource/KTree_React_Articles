import React, { useState } from 'react'
import './App.css'
import ClickTracker from './example1'
import FocusInputOnMount from './example2'
import AutoFocusInputForm from './example3'

const App = () => {
  const [selectedExample, setSelectedExample] = useState(null)

  const handleExampleClick = exampleNumber => {
    setSelectedExample(exampleNumber)
  }

  return (
    <div className='app-container'>
      <div className='example-label' onClick={() => handleExampleClick(1)}>
        Example 1: Tracking Clicks without Re-render
      </div>
      <div className='example-label' onClick={() => handleExampleClick(2)}>
        Example 2: Automatically Focus input on mount
      </div>
      <div className='example-label' onClick={() => handleExampleClick(3)}>
        Example 3: AutoFocus Input Form based on max length of input
      </div>

      {/* Render the selected example component */}
      {selectedExample === 1 && <ClickTracker />}
      {selectedExample === 2 && <FocusInputOnMount />}
      {selectedExample === 3 && <AutoFocusInputForm />}
    </div>
  )
}

export default App
