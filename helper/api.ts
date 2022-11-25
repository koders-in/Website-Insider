const axios = require("axios");

export const JobClient = axios.create({
  baseURL: "http://localhost:8080/api/rest/",
});
