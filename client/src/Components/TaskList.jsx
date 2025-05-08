import { useEffect } from "react";
import {getAllTasks} from '../api/tasks.api'
function TaskList(){

    useEffect(() => {
        function loadTasks(){
            const res = getAllTasks();
            console.log(res);
        }
    },[])

    return(
        <div>
            TaskList
        </div>
    )
}

export default TaskList;   