import { useEffect } from "react";
import getAllTasks from "../api/tasks.api";
function TaskList(){

    useEffect(() => {
        async function loadTasks(){
            const res = await getAllTasks();
            console.log(res);
        }
        loadTasks()
    },[])

    return(
        <div>
            TaskList
        </div>
    )
}

export default TaskList;   