import { useEffect, useState } from "react";
import {getAllTasks} from "../api/tasks.api";
import TaskCard from './TaskCard'
function TaskList(){


    const [tasks, setTasks] = useState([]);

    

    useEffect(() => {
        async function loadTasks(){
            const res = await getAllTasks();
            console.log(res.data);
            setTasks(res.data);
        }
        loadTasks()
    },[])

    return(
        <div>
            <h1>Task List</h1>
            <div  >
                {tasks.map((task) => (
                    <TaskCard key = {tasks.id} task = {task}/>
                    
                    
                ))}
            </div>
        </div>
    )
}

export default TaskList;   