import axios from "axios";

export const usersAPI = {
    getUsers() {
        return axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => res.data)
    }
}