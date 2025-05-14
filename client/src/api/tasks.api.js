import axios from 'axios';

const API = 'http://localhost:8000/tasks/api/v1/tasks/'

export const getAllTasks =  () => {

    return axios.get(API)

}

export const CreateTask = (data) => {
    return axios.post(API, data)
}

export const deleteTask = (id) => {
    return axios.delete(`${API}${id}`)
}



