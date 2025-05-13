const TaskCard = ({task}) =>{
    return(
        <div >
            <h2>{task.titulo}</h2>
            <p>{task.descripcion}</p>
            <p>{task.estado}</p>
            <hr></hr>
        </div>
    )
}

export default TaskCard;