import axios from 'axios'
const instance=axios.create({
    baseURL:"https://blogbackend46.herokuapp.com"
})
export default instance;