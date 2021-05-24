import axios from "axios";

export const api = axios.create({

  baseURL: "https://doarte-api.herokuapp.com/",
});
