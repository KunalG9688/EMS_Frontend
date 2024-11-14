import React, { useContext } from 'react'
import {AuthContext} from '../../context/AuthProvider'

const AllTask = (e) => {

const [userData, setUserData] = useContext(AuthContext)
// console.log(authData)
  return (
    <div className='p-5 bg-[#1c1c1c] p-5 mt-5 h-60 rounded '>
        <div className='flex justify-between rounded bg-red-400 mb-2 py-2 px-4'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div className='h-[80%] overflow-auto'>
                {userData.map(function(elem,idx){
                    return <div key={idx} className='flex justify-between rounded bg-[#1c1c1c] border-emerald-500 border-2 mb-2 py-2 px-4'>
                    <h2 className='text-lg font-medium w-1/5'>{elem.firstname}</h2>
                    <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskNumbers.newTask}</h3>
                    <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumbers.active}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-white'>{elem.taskNumbers.completed}</h5>
                    <h5 className='text-lg font-medium w-1/5 text-red-600'>{elem.taskNumbers.failed}</h5>
            </div>
            })}
        </div> 
        {/* <div className='flex justify-between rounded bg-red-400 mb-2 py-2 px-4'>
            <h2>Kunal</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        <div className='flex justify-between rounded bg-yellow-400 mb-2 py-2 px-4'>
            <h2>Kunal</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        <div className='flex justify-between rounded bg-blue-400 mb-2 py-2 px-4'>
            <h2>Kunal</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        <div className='flex justify-between rounded bg-orange-400 mb-2 py-2 px-4'>
            <h2>Kunal</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        <div className='flex justify-between rounded bg-green-400 mb-2 py-2 px-4'>
            <h2>Kunal</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div>
        <div className='flex justify-between rounded bg-purple-400 mb-2 py-2 px-4'>
            <h2>Kunal</h2>
            <h3>Make a UI Design</h3>
            <h5>Status</h5>
        </div> */}
    </div>
  )
}

export default AllTask