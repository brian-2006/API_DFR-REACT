import {useForm} from "react-hook-form";
import Post from '../api/postAPI'

export default function TaskFormPage() {

    const {register, handleSubmit}= useForm();

    const onSubmit = handleSubmit( async data => {
        const respuesta = await Post(data)
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
        </div>
       </> 
    )
}