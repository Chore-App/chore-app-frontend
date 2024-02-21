import axios from 'axios';


class API {
    host: string
    constructor(host: string){
        this.host = host
    }
    // Sample request to fetch number of entries in the "User" table
    // TODO: Remove this request when no longer needed
    getUserCount(){
        const url = `${this.host}/usercount`
        return axios.get(url)
    }
}
export default API