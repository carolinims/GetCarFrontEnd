import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8081/'
})

// const http = axios.create({
//     baseURL: 'http://getcar.eba-ztmgvkte.us-west-2.elasticbeanstalk.com/'
// })

export default http