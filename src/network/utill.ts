import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

service.interceptors.response.use(
    response => {
        const res = response
        return res;
    }
)

export default service