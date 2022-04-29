import StudentController from '../src/controller/students_controller.js';



describe('test suit form StudentController', () => {
    test('1) get all students', () => {
        const students = StudentController.getAllStudents();

        expect.arrayContaining(students);
    });
});
