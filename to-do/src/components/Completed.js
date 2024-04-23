import React, { useContext, useEffect, useState } from 'react'
import { TaskContext } from './App'


const Completed = () => { 

    const { taskCompleted, setTaskCompleted } = useContext(TaskContext)
    const [filterTask, setFilterTask] = useState([])

    const clearTaskCompleted = () => {
        setFilterTask([])
    }

    useEffect(() => {
        taskCompleted &&  setFilterTask([...filterTask,taskCompleted])
        return setTaskCompleted("")
    },[taskCompleted])

    
    return ( 
        
        <div className='completed'>

            <h1>Effectuées : <i style={{color:"#d60101"}}>{filterTask.length}</i> </h1> 

            { (filterTask.length === 0)
                ?   
                    <h3>(aucune tâche éffectuée...)</h3>   
                :
                    <ul className="listTaskCompleted">
                        {  
                            filterTask.map((task,id) => <li key={id} className="TaskCompleted" > <i className='icon'>&#x2713; </i> {task} </li>)                          
                        }
                    </ul>  
            } 
            <div style={{textAlign:"center"}}>
                    <button className='clearTaskCompleted' onClick={clearTaskCompleted}>nettoyer</button> 
            </div>
            
        
        </div>
    
    )
}

export default Completed