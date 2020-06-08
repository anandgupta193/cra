import axios from "axios";

export default axios.create({
    baseURL: "https://api.coronatracker.com/v3/stats/worldometer/topCountry"
})