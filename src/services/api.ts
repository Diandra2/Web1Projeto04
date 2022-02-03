import axios from "axios";

const api = axios.create({
    baseURL: "https://adonisjsweb1.herokuapp.com/",
    headers: {
      'Content-Type': 'application/json'
    }
  })
  
  export default api