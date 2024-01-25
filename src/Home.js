// Home.js
import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'

const Home = () => {
  const { isAuthenticated, login, logout } = useContext(AuthContext)

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {isAuthenticated ? (
          <>
            <p style={styles.welcomeText}>Welcome! You are logged in.</p>
            <button style={styles.button} onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <p style={styles.infoText}>You are not logged in.</p>
            <button style={styles.button} onClick={login}>
              Login
            </button>
          </>
        )}
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  content: {
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#4CAF50', // Green color
  },
  infoText: {
    fontSize: '18px',
    color: '#f44336', // Red color
  },
  button: {
    marginTop: '10px',
    padding: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
}

export default Home
