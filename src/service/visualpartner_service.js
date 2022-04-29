
import FileReader from '../utils/reader.js';

class VisualPartnerService {

    static #students = FileReader.loadJson('visualpartners');

    static get getAllStudents() {
        return this.#students;
    }

    static get getCerficatedStudents() {

        return this.#students.filter((student) => student.haveCertification);
    }
}


export default VisualPartnerService;
