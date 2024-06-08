import Axios from "axios";
Axios.defaults.baseURL = "http://localhost:3000";

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
  // saveUser(újobjektum) {
  //   return Axios.post("/valamik", újobjektum).then(() => {});
  // },
  // updateUser(módosítottObjektum, id) {
  //   return Axios.put(`/valamik/${id}`, módosítottObjektum).then(() => {});
  // },
};
