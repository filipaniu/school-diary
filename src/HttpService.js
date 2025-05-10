import axios from "axios";

class HttpService {
    async getStudents() {
        return axios.get("http://localhost:8080/students");
    }

    async createStudent(body){
        return axios.post("http://localhost:8080/student", body)
    }
}

export default new HttpService();
