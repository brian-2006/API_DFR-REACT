import {useNavigate} from 'react-router-dom'

const TaskCard = ({task}) =>{

    const navigate = useNavigate();

    return(
        <div style={{backgroundColor: 'black'}}
            onClick = {()=> navigate(`/tasks/${task.id}`)}
        >

            <h2>{task.titulo}</h2>
            <p>{task.descripcion}</p>
            <p>{task.estado}</p>
            <hr></hr>
        </div>
    )
}

export default TaskCard;