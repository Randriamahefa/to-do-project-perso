import React, { useCallback, useContext, useRef, useState } from 'react'
import { TaskContext } from './App'


const  AddTask = () => {
    const input = useRef(null)
    const { setTasks } = useContext(TaskContext)
    const [newTask,setNewTask] = useState("")


    const createNewTask = useCallback(() => {
        
        if (newTask) {

            const Task = {
                name:newTask,
                completed:false
            }

            setTasks(prev => [...prev,Task])
            setNewTask("")
            input.current.focus()
            input.current.value = ""
        }
        
    },[newTask])

    const clear = () => {
        setTasks([])
    }

        return( 
            <header>
                    <h1>To-Do Liste</h1>
                    <input ref={input} type="text" placeholder="Nouvelle tâche ..." onChange={e => setNewTask(e.target.value)} />
                    <button className="add" onClick={createNewTask}>Ajouter</button>
                    <button className="clear"  onClick={clear}>Tout effacer</button>
            </header>
        )
    }


export default AddTask