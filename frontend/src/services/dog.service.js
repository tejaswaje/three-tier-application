import http from "../http-common";

class DogDataService {
  getAll() {
    return http.get("/");
  }

  get(id) {
    return http.get(`/dog/${id}`);
  }

  create(data) {
    return http.post("/add", data);
  }

  update(id, data) {
    return http.put(`/edit/${id}`, data);
  }

  delete(id) {
    return http.delete(`/remove/${id}`);
  }
}

export default new DogDataService();
