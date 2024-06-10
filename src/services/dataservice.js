import Axios from "axios";
Axios.defaults.baseURL = "http://127.0.0.1:8000/api";

export default {
  getAllGallery() {
    return Axios.get("/galleries")
      .then((resp) => {
        //console.log(resp.data);
        return resp.data;
      })
      .catch((err) => {
        //console.log(err);
        return Promise.reject(err);
      });
  },
  getAllPhotos() {
    return Axios.get("/photos")
      .then((resp) => {
        //console.log(resp.data);
        return resp.data;
      })
      .catch((err) => {
        //console.log(err);
        return Promise.reject(err);
      });
  },
  getUserData(user) {
    return Axios.get(`/users/${user}`)
      .then((resp) => {
        //console.log(resp.data);
        return resp.data;
      })
      .catch((err) => {
        //console.log(err);
        return Promise.reject(err);
      });
  },
  
};
