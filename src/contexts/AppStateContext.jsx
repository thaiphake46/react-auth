import { createContext, useState } from 'react'

export const AppStateContext = createContext()

export const AppStateProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)

  const value = {
    isLogin,
    setIsLogin,
  }
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
}
