import React, { createContext, useState } from 'react'
import ToDoList from './ToDoList'
import Completed from './Completed'

export const TaskContext = createContext(null)

const App = () => {
  const [tasks, setTasks] = useState([])
  const [taskCompleted, setTaskCompleted] = useState("")

      return(
        <section className="main">
            <TaskContext.Provider value={{tasks,setTasks,taskCompleted, setTaskCompleted}}>
                <ToDoList />
                <Completed />
            </TaskContext.Provider>
        </section>
      )
}

export default App