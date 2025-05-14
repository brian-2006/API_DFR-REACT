import {useForm} from "react-hook-form";
import {CreateTask, deleteTask} from '../api/tasks.api';
import { useParams,useNavigate } from "react-router-dom";

export default function TaskFormPage() {

    const {register, handleSubmit}= useForm();
    const params = useParams();
    const navigate = useNavigate();

    const onSubmit = handleSubmit( async data => {
        const respuesta = await CreateTask(data)
        console.log(respuesta);
    });


    return(
       <>
        <div>
            <form  onSubmit={onSubmit} >
                <input type="text" 
                placeholder="title"
                {...register("titulo", {required: true})}
                />

                <textarea
                rows='3'
                placeholder="descripcion"
                {...register('descripcion', {required: true})}/>

                <button type="submit">save</button>
            </form>

            {params.id &&(
                <button onClick={async () => {
                    const aceptado = window.confirm('¿Estás segurx que quieres eliminar esta tarea?');
                    if (aceptado) {
                        await deleteTask(params.id);
    
                    }
                   
                }}>
                    delete
                </button>
            )}

        </div>
       </> 
    )
}