import { useContext } from 'react'
import './App.css'
import { AppStateContext } from './contexts/AppStateContext'

function App() {
  const redirectUrl = 'http://localhost:5173'
  const loginUrl = 'http://localhost:3000/auth/signin-google?' + 'redirectUrl=' + redirectUrl

  const appContext = useContext(AppStateContext)

  return (
    <>
      <h1>App</h1>

      <div>
        {appContext.isLogin ? (
          <h1>Login success</h1>
        ) : (
          <button>
            <a href={loginUrl}>Login with google</a>
          </button>
        )}
      </div>
    </>
  )
}

export default App
