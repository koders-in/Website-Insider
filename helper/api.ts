const axios = require("axios");

export const JobClient = axios.create({
  baseURL: "http://192.168.29.129:8080/api/rest/",
});
