import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https//api.com/",
  headers: {
    token: "sndjasdnkajsndjasd",
  },
});

// interceptors
// axiosClient.interceptors.response.use(
//     // thành công
//     (response) => {
//       // Ta có thể thay đổi response trước khi response được trả ra cho nơi gọi request.
//       // response.data: format của axios
//       // .content: format của cybersoft
//       return response.data.content;
//     },
//     // thất bại
//     (error) => {
//       // Ta có thể thay đổi error trước khi error được trả ra cho nơi gọi request.
//       Promise.reject(error.response?.data.content);
//     }
//   );

export default axiosClient;
