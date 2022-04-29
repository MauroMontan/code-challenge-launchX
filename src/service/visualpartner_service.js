
import FileReader from '../utils/reader.js';

class VisualPartnerService {

    static #students = FileReader.loadJson('visualpartners');

    static get getAllStudents() {
        return this.#students;
    }

    static get getCerficatedStudentEmails() {
        const certifacated = this.#students.filter((student) => student.haveCertification === true);
        const emails = certifacated.map((student) => student.email);
        return emails;
    }

    static get hasHigherCredits() {
        const credited = this.#students.filter((student) => student.credits > 500);

        return credited;
    }
}


export default VisualPartnerService;
