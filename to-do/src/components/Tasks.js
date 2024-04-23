import React, { useContext } from "react";
import { TaskContext } from "./App";

const Tasks = ({task}) => {
     
    const { setTaskCompleted } = useContext(TaskContext)  
     
     const Complete = () => {
        task.completed = true
        setTaskCompleted(task.name)
     } 

     return(
      
            <li className="tasks" style={task.completed? {display:"none"} : {display:"block"}} onClick={Complete} >
                {task.name}
            </li>
    )
     
}

export default Tasks
