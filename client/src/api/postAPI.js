import axios from "axios";

const Post = (data) => {
    return axios.post('http://localhost:8000/tasks/api/v1/tasks/', data)
}

export default Post;  