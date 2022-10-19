import axios from "axios";
const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyC_RI6FVfBBLOsgwbkvfQ__KIrrBBcMfw4",
  },
});

export default request;
