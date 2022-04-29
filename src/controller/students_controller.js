
import StudentService from '../service/students_service.js';


class StudentController {

    static getAllStudents = () => StudentService.getAllStudents;

    static certificatedStudentsByEmail = () => StudentService.getCerficatedStudentEmails;

    static getCreditedStudents = () => StudentController.getCreditedStudents;

}


export default StudentController;
