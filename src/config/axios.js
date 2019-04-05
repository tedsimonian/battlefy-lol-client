import axios from "axios";
// setup our axios instance to accept a base url
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL
});

export default instance;
