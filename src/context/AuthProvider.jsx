import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [userData,setUserData] = useState(null)
    // localStorage.clear()
    // const data = getLocalStorage()
    // console.log(data.employees)
    // setUserData(getLocalStorage())
    // const {employee, admin} = getLocalStorage()
    // setUserData({employee, admin})

    useEffect(() => {
      setLocalStorage()
        const {employees} = getLocalStorage()
        setUserData(employees)
    }, [])
    
    
  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
        
    </div>
  )
}

export default AuthProvider