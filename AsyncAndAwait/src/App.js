import React from 'react'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import './App.css'

// Import your components
import FetchingDataClass from './FetchingDataClass'
import FetchingDataFunctional from './FetchingDataFunctional'
import HandlingEvents from './HandlingEvents'
import AsyncAwaitInUseState from './AsyncAwaitInUseState'
import ErrorHandling from './ErrorHandling'
import AvoidingMemoryLeaks from './AvoidingMemoryLeaks'
import CancellationOfPromises from './CancellationOfPromises'
import ParallelAsyncOperations from './ParallelAsyncOperations'
import AsyncAwaitWithReactRouter from './AsyncAwaitWithReactRouter'
import DynamicAPIRequests from './DynamicAPIRequests'
import TimeoutsAndIntervals from './TimeoutsAndIntervals'
import OptimisticUIUpdates from './OptimisticUIUpdates'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <div style={{ padding: '4rem' }}>
          <nav>
            <p>
              <Link to='/fetching-data-class'>Fetching Data in Class Component</Link>
            </p>
            <p>
              <Link to='/fetching-data-functional'>Fetching Data in Functional Component</Link>
            </p>
            <p>
              <Link to='/handling-events'>Handling Events</Link>
            </p>
            <p>
              <Link to='/using-async-await'>Using async/await with useState and useEffect</Link>
            </p>
            <p>
              <Link to='/error-handling'>Error Handling</Link>
            </p>
            <p>
              <Link to='/avoiding-memory-leaks'>Avoiding Memory Leaks</Link>
            </p>
            <p>
              <Link to='/cancellation-of-promises'>Cancellation of Promises</Link>
            </p>
            <p>
              <Link to='/parallel-async-operations'>Parallel Asynchronous Operations</Link>
            </p>
            <p>
              <Link to='/async-await-with-react-router/20'>Async/Await with React Router</Link>
            </p>
            <p>
              <Link to='/dynamic-api-requests'>Dynamic API Requests</Link>
            </p>
            <p>
              <Link to='/timeouts-and-intervals'>Timeouts and Intervals</Link>
            </p>
            <p>
              <Link to='/optimistic-ui-updates'>Optimistic UI Updates</Link>
            </p>
          </nav>
          <Routes>
            <Route path='/fetching-data-class' element={<FetchingDataClass />} />
            <Route path='/fetching-data-functional' element={<FetchingDataFunctional />} />
            <Route path='/handling-events' element={<HandlingEvents />} />
            <Route path='/using-async-await' element={<AsyncAwaitInUseState />} />
            <Route path='/error-handling' element={<ErrorHandling />} />
            <Route path='/avoiding-memory-leaks' element={<AvoidingMemoryLeaks />} />
            <Route path='/cancellation-of-promises' element={<CancellationOfPromises />} />
            <Route path='/parallel-async-operations' element={<ParallelAsyncOperations />} />
            <Route
              path='/async-await-with-react-router/:todoId'
              element={<AsyncAwaitWithReactRouter />}
            />
            <Route path='/dynamic-api-requests' element={<DynamicAPIRequests />} />
            <Route path='/timeouts-and-intervals' element={<TimeoutsAndIntervals />} />
            <Route path='/optimistic-ui-updates' element={<OptimisticUIUpdates />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
