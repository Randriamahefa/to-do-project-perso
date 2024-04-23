import React, { useContext } from 'react'
import Tasks from './Tasks'
import { TaskContext } from './App'
import AddTask from './AddTask'

   
const ToDoList = () => { 
    const { tasks } = useContext(TaskContext)

    return ( 
        <div className='toDo'>

            <AddTask />

            { (tasks.length === 0)
                ?   
                    <h3>(La liste est vide...)</h3>   
                :
                    <ul className='listTask'>
                        { 
                            tasks.map((task,id) => <Tasks task={task} key={id} /> ) 
                        }
                    </ul>
            }   
            
        </div>
    
    )
}

export default ToDoList