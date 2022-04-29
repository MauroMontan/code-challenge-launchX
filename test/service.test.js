import StudentService from '../src/service/visualpartner_service.js';

describe('test suit for service', () => {
    test('1) get certificated users', () => {
        const email = 'Todd@visualpartnership.xyz';
        const certificatedStudents = StudentService.getCerficatedStudentEmails;

        expect(certificatedStudents[0]).toEqual(email);
    });

    test('2) get users with credits higher than 500 ', () => {

        const creditedStudents = StudentService.hasHigherCredits;
        expect(creditedStudents[0].credits).toBe(508);
    });
});
