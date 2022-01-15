import axios from 'axios';

export default axios.create({
    baseURL: "https://raw.githubusercontent.com/prgrmmrthz/JSONServer/main"
})