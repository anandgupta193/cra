import axios from "axios";

export default axios.create({
    baseURL: "https://api.rootnet.in/covid19-in/contacts"
});