import axios from 'axios';

const getAllTasks = async () => {

    return axios.get('http://localhost:3000/tasks/api/v1/tasks/')

}

export default getAllTasks;

