import axios from 'axios'


const USER_REST_API_URL = 'http://localhost:8000/teachers'

class TeacherServices{

    getTeachers(){
        return axios.get(USER_REST_API_URL);
    }

}
export default new TeacherServices();