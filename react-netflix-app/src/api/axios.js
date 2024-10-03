import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "1dd929fec3fb3914947ee1636a9eb8a5",
    language: "ko-KR",
  },
});

export default instance;
