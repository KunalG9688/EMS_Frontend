import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className="p-4 sm:p-6 md:p-10 bg-[#1c1c1c] h-screen overflow-y-auto">
      {/* Header Section */}
      <Header changeUser={props.changeUser} data={props.data} />
      
      {/* Task Numbers Section */}
      <div className="mt-6">
        <TaskListNumber data={props.data} />
      </div>
      
      {/* Task List Section */}
      <div className="mt-8">
        <TaskList data={props.data} />
      </div>
    </div>
  )
}

export default EmployeeDashboard
