const employees = [
  {
    id: 1,
    firstname: "Rajesh",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Monthly Report",
        taskDescription: "Prepare and submit the monthly performance report.",
        taskDate: "2024-10-18",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Meeting",
        taskDescription: "Attend the team sync-up meeting.",
        taskDate: "2024-10-15",
        category: "Meeting"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Feedback Review",
        taskDescription: "Review client feedback for the recent project.",
        taskDate: "2024-10-19",
        category: "Client Work"
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 2,
    firstname: "Sneha",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Data Backup",
        taskDescription: "Perform routine data backup for the database.",
        taskDate: "2024-10-20",
        category: "Maintenance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Security Audit",
        taskDescription: "Complete the security audit for the server.",
        taskDate: "2024-10-22",
        category: "Security"
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    }
  },
  {
    id: 3,
    firstname: "Amit",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Cleanup",
        taskDescription: "Remove outdated records from the database.",
        taskDate: "2024-10-16",
        category: "Database"
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "System Upgrade",
        taskDescription: "Upgrade the system to the latest version.",
        taskDate: "2024-10-21",
        category: "System"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Document the latest features and updates.",
        taskDate: "2024-10-23",
        category: "Documentation"
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 4,
    firstname: "Priya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Test New Features",
        taskDescription: "Perform testing for new application features.",
        taskDate: "2024-10-19",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixing",
        taskDescription: "Fix reported bugs from the latest release.",
        taskDate: "2024-10-14",
        category: "Development"
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 5,
    firstname: "Vikram",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Project Plan",
        taskDescription: "Develop the project plan for the upcoming quarter.",
        taskDate: "2024-10-25",
        category: "Planning"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Resolve Network Issue",
        taskDescription: "Fix the network outage issue affecting the office.",
        taskDate: "2024-10-17",
        category: "IT Support"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Prepare the presentation for the quarterly meeting.",
        taskDate: "2024-10-24",
        category: "Presentation"
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 1
    }
  }
];

  
  const admin = [
            {
          "id": 1,
          "email": "admin@example.com",
          "password": "123"
        }
    ];
      
export const setLocalStorage = ()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    // console.log(JSON.parse(data))
    // console.log(employees, admin)

    return {employees, admin}
}
