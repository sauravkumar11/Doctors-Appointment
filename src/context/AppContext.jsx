import { createContext } from 'react'
import { doctors } from '../assets/assets'

export const AppContext = createContext()

const AppContextProvider = ({ children }) => {
  const curreccySymbol = '₹'
  const value = {
    doctors,curreccySymbol
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider

