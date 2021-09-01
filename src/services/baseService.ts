import axios from "axios";

// create a simple axios instance
// this instance will be extended
// for each request
const service = axios.create({
  baseURL: "/api",
});

export default service;
