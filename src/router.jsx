import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import LoginSuccess from './components/LoginSuccess.jsx'
import LoginError from './components/LoginError.jsx'
import FormLogin from './components/FormLogin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <FormLogin />,
  },
  {
    path: '/login/success',
    element: <LoginSuccess />,
  },
  {
    path: '/login/error',
    element: <LoginError />,
  },
])

export default router
