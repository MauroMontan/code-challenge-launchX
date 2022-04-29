import { Router } from 'express';
import StudentController from '../controller/students_controller.js';

const router = Router();


// this router is defined as "students/";

router.get('/', (_, res) => {
    res.json(StudentController.getAllStudents());
});


router.get('/certicated/emails', (_, res) => {
    res.json(StudentController.certificatedStudentsByEmail());
});


router.get('/credited', (_, res) => {
    res.json(StudentController.getCreditedStudents());
});

export default router;

