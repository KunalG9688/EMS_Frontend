import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './context/AuthProvider'

//  localStorage.clear()



const App = () => {

//  useEffect(() => {
//   //  setLocalStorage()
//   getLocalStorage()
//  }, )






const [user, setUser] = useState(null)
const [loggedInUserData, setloggedInUserData] = useState(null)
const [userData,setUserData] = useContext(AuthContext)
// console.log(authData)


// useEffect(() => {
//   if(authData){
//     const loggedInUser = localStorage.getItem("loggedInUser")
//     if(loggedInUser){
//      setUser(loggedInUser.role)
//   } 
//   }
//  }, [authData])

useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    // console.log(userData)
    setUser(userData.role)
    setloggedInUserData(userData.data)
  }
},[])

// console.log(authData)



const handleLogin = (email, password) =>{
  if(email == 'admin@me.com' && password == '123'){
    setUser('admin')
    localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    // console.log("This is admin")
  }else if(userData){
    
    const employee = userData.find((e) =>email === e.email && e.password === password)
    if(employee){
      // console.log(employee)
        setUser('employee')
        setloggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
    }
  // else if(email == 'user@me.com' && password == '123'){
    // console.log("This is user")
    
    // localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
  } else{
    alert("Invalid credential")
  // console.log(email, password)
}
}
// handleLogin('user@me.com',123)
// const data = useContext(AuthContext)
// console.log(data)


  return (
    <>
      {!user ? <Login handleLogin = {handleLogin}/> : ''}
      {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
      
    </>
  )
}

export default App