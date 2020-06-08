import axios from "axios";

export default axios.create({
    baseURL: "https://newsapi.org/v2/top-headlines?q=coronavirus&pageSize=10&country=in&apiKey=3f0aacf2222146ee8ce6f654b6abed9b"
});